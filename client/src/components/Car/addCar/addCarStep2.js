import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { getCarStep1, addCarStep2 } from "../../../actions/carActions";
import ShowAddLevelOne from "./addCarStep2-components/showAddLevelOne";
import AwesomeComponentSpinner from "../../common/AwesomeComponent";

class AddCarStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      handle: ""
    };
  }

  onImageChange = event => {
    let files = event.target.files;

    this.setState({
      images: []
    });

    if (files && files[0]) {
      for (let i = 0; i < files.length; i++) {
        const element = files[i];
        var picReader = new FileReader();
        picReader.addEventListener("load", event => {
          var picFile = event.target;

          this.setState({
            images: [
              ...this.state.images,
              { file: element, previewUrl: picFile.result, index: i }
            ]
          });
        });

        picReader.readAsDataURL(element);
      }
    }
  };

  _handleSubmit = e => {
    e.preventDefault();

    let { images } = this.state;
    let newArr = [];

    for (let i = 0; i < images.length; i++) {
      const element = images[i];
      delete element.index;
      delete element.previewUrl;
      newArr.push(element.file);
    }

    this.props.addCarStep2(newArr, this.state.handle, this.props.history);
  };

  deleteImage = event => {
    let { imageid } = event.target.dataset;
    let images = this.state.images.filter(image => {
      return image.index != imageid;
    });

    this.setState({
      images: [...images]
    });
  };

  componentDidMount() {
    const { handle } = this.props.match.params;

    this.setState({
      handle
    });

    this.props.getCarStep1(handle);
  }

  render() {
    let { loading, addLevelOne, errors } = this.props;
    let content, listOfImages, error;
    const { images } = this.state;

    if (images) {
      listOfImages = images.map((image, index) => {
        return (
          <div key={index}>
            <img
              className="mt-3 mr-2"
              height="130"
              width="195"
              key={index}
              src={image.previewUrl}
            />
            <i
              className="fas fa-minus-circle"
              data-imageid={image.index}
              onClick={this.deleteImage}
            />
          </div>
        );
      });
    }

    if (loading) {
      content = (
        <div className="text-center">
          <AwesomeComponentSpinner />
        </div>
      );
    } else {
      content = <ShowAddLevelOne car={addLevelOne} />;
    }

    if (errors.file) {
      error = (
        <div className="alert alert-danger" role="alert">
          {errors.file}
        </div>
      );
    }

    return (
      <div>
        {content}
        <div className="row">
          <div className="col-12">
            {listOfImages}
            <form onSubmit={this._handleSubmit} encType="multipart/form-data">
              <input
                type="file"
                name="myFiles"
                onChange={this.onImageChange}
                multiple
              />
              <button type="submit" onClick={this._handleSubmit}>
                Upload Image
              </button>
            </form>
            {error}
          </div>
        </div>
      </div>
    );
  }
}

AddCarStep2.propTypes = {
  errors: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  addLevelOne: PropTypes.object
};

const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.carAdds.loading,
  addLevelOne: state.carAdds.addLevelOne
});

export default connect(
  mapStateToProps,
  { getCarStep1, addCarStep2 }
)(withRouter(AddCarStep2));
