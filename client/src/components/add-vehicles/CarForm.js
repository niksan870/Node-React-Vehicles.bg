import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getBrands,
  getModels,
  getCarGeneration,
  getCarModifications,
  getCarFinal,
  resetCarSearch
} from "../../actions/carsDataActions";

import Step1 from "./CarFormSteps/Step1";
import Step2 from "./CarFormSteps/Step2";
import Step3 from "./CarFormSteps/Step3";
import Step4 from "./CarFormSteps/Step4";
import Step5 from "./CarFormSteps/Step5";
import BreadCrumb from "../common/CarFormBreadcrumb";

class CarFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      carBrands: [],
      brand: "",
      carModels: [],
      model: "",
      carGeneration: [],
      generation: "",
      modifications: [],
      modification: "",
      showExtendedCarData: false,
      writeReviewsFrom: false,
      finalCar: []
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    if (name === "brand") {
      this._next();
      this.props.getModels(value);
    } else if (name === "model") {
      this.props.getCarGeneration(this.state.brand, value);
      this._next();
    } else if (name === "generation") {
      let { brand, model } = this.state;
      this.props.getCarModifications(brand, model, value);
      this._next();
    } else if (name === "modification") {
      let { brand, model, generation } = this.state;
      let engine = value.split("|")[1];
      let urlPiece = value.split("|")[0];
      this.props.getCarFinal(
        brand,
        model,
        generation,
        engine,
        urlPiece,
        this.props.history
      );
      this._next();
    }
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
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
    e.preventDefault();

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

  componentDidMount() {
    this.props.getBrands();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      carBrands: nextProps.carBrands,
      carModels: nextProps.carModels,
      carGenerations: nextProps.carGenerations,
      carModifications: nextProps.carModifications,
      finalCar: nextProps.finalCar
    });
  }

  render() {
    const { carModifications } = this.state;

    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-12 text-center p-3 mb-2 text-white">
            <h1 className="text-primary">Add Car Reviews</h1>
            <form onSubmit={this.handleSubmit}>
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                carBrands={this.state.carBrands}
                brand={this.state.brand}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                carModels={this.state.carModels}
                model={this.state.model}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                carGenerations={this.state.carGenerations}
                generation={this.state.generation}
              />
              <Step4
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                carVariations={carModifications}
                modificacation={this.state.modificacation}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CarFrom.propTypes = {
  getBrands: PropTypes.func,
  carBrands: PropTypes.array,
  loading: PropTypes.bool,
  getModels: PropTypes.func,
  carModels: PropTypes.array,
  getCarGeneration: PropTypes.func,
  getCarModifications: PropTypes.func,
  carGenerations: PropTypes.array,
  carModifications: PropTypes.array,
  finalCar: PropTypes.object
};

const mapStateToProps = state => ({
  loading: state.carAdds.loading,
  carBrands: state.carsData.carBrands,
  carModels: state.carsData.carModels,
  carGenerations: state.carsData.carGenerations,
  carModifications: state.carsData.carModifications,
  finalCar: state.carsData.finalCar
});

export default connect(
  mapStateToProps,
  {
    getBrands,
    getModels,
    getCarGeneration,
    getCarModifications,
    getCarFinal,
    resetCarSearch
  }
)(CarFrom);
