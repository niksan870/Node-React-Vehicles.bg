import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCars } from "../../../actions/carActions";

class CarouselComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    this.props.getCars();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cars: nextProps.showCars,
      profiles: nextProps.showCarProfiles
    });
  }

  render() {
    let { showCars } = this.props;
    let imagesArr = [];
    let carousel;
    if (showCars) {
      showCars.map((car, index) => {
        const buffer = car.images[0].data;
        const b64 = new Buffer(buffer).toString("base64");
        let mimeType = car.images[0].contentType;
        let src = `data:${mimeType};base64,${b64}`;

        imagesArr.push(
          <div key={index}>
            <img src={src} />
            <Link className="nav-link" to={"cars/single/" + car.handle}>
              <h3 className="legend h4">
                {car.made} {car.model} {car.modification}
              </h3>
            </Link>
          </div>
        );
      });
    }

    if (imagesArr.lemgth > 0) {
      carousel = <Carousel>{imagesArr}</Carousel>;
    } else {
      carousel = null;
    }

    return (
      <div className="col-8">
        <h2>Най-скорошни обяви</h2>
        <Carousel>{imagesArr}</Carousel>
      </div>
    );
  }
}

CarouselComp.propTypes = {
  errors: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  addLevelOne: PropTypes.object
};

const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.carAdds.loading,
  showCars: state.carAdds.showCars,
  showCarProfiles: state.carAdds.showCarProfiles
});

export default connect(
  mapStateToProps,
  { getCars }
)(withRouter(CarouselComp));
