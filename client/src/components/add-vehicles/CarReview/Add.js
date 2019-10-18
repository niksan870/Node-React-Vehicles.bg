import React, { Component } from "react";
import CarReviewSubmit from "../carReviewSubmit/carReviewSubmit";
import { getCarFinal } from "../../../actions/carsDataActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalCar: {}
    };
  }

  loadMore = e => {
    if (this.state.showExtendedCarData) {
      this.setState({
        showExtendedCarData: false
      });
    } else {
      this.setState({
        showExtendedCarData: true
      });
    }
  };

  writeReviews = e => {
    if (this.state.writeReviewsFrom) {
      this.setState({
        writeReviewsFrom: false,
        showExtendedCarData: false
      });
    } else {
      this.setState({
        writeReviewsFrom: true,
        showExtendedCarData: false
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      finalCar: nextProps.finalCar
    });
  }

  componentDidMount() {
    this.props.getCarFinal(this.props.history);
  }

  render() {
    const { finalCar } = this.props;
    let data,
      reviewForm,
      carData = "";
    let buttonText = "Show More...";
    let header = [];
    let images = [];

    if (finalCar != {} && finalCar != undefined) {
      for (let i = 0; i < finalCar.data.length; i++) {
        data += "<h2>" + finalCar.data[i].title + "</h2>";
        data +=
          "<table className='table table-dark'>" +
          finalCar.data[i].info +
          "</table>";
      }

      for (let i = 0; i < finalCar.header.length; i++) {
        header.push(
          <div
            key={finalCar.header[i].img}
            className="d-inline-block"
            style={{
              margin: "50px 50px 50px 0px"
            }}
          >
            <img
              src={finalCar.header[i].img}
              alt={finalCar.header[i].alt}
              title={finalCar.header[i].alt}
            />
            <br />
            {finalCar.header[i].text}
            <span>
              {" "}
              см<sup>3</sup>
            </span>
          </div>
        );
      }

      for (let i = 0; i < finalCar.images.length; i++) {
        images.push(
          <img
            style={{ marginRight: "40px", marginBottom: "50px" }}
            key={finalCar.images[i]}
            src={finalCar.images[i]}
          />
        );
      }

      if (this.state.showExtendedCarData) {
        carData = (
          <div className="row">
            <div className="col-md-12 text-secondary">
              <div dangerouslySetInnerHTML={{ __html: data }} />
            </div>
          </div>
        );
        buttonText = "Show less...";
      } else {
        carData = null;
        buttonText = "Show more...";
      }

      if (this.state.writeReviewsFrom) {
        reviewForm = <CarReviewSubmit history={this.props.history} />;
      } else {
        reviewForm = null;
      }
    }

    return (
      <div className="row">
        <div className="col-md-12">{header}</div>
        <div className="col-md-12">{images}</div>

        {carData}
        {reviewForm}

        <div className="col-md-6 text-center">
          <button
            onClick={this.loadMore}
            type="button"
            className="text-center btn btn-primary"
          >
            {buttonText}
          </button>
        </div>
        <div className="col-md-6 text-center">
          <button
            onClick={this.writeReviews}
            type="button"
            className="text-center btn btn-primary"
          >
            Write a review
          </button>
        </div>
      </div>
    );
  }
}

Add.propTypes = {
  loading: PropTypes.bool,
  finalCar: PropTypes.object,
  getCarFinal: PropTypes.func
};

const mapStateToProps = state => ({
  loading: state.carAdds.loading,
  finalCar: state.carsData.finalCar
});

export default connect(
  mapStateToProps,
  { getCarFinal }
)(Add);
