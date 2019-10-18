import React, { Component } from "react";
import SelectListGroup from "../../common/SelectListGroup";
import InputGroup from "../../common/InputGroup";
import { getBrands, getModels } from "../../../actions/carsDataActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import options from "../../common/options";

class SmallSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carBrands: [],
      carModels: []
    };
  }
  onSubmit = e => {
    e.preventDefault();
    let { made, model, price, year, typeOfEngine, typeOfGear } = this.state;
    const carData = {
      made,
      model,
      price,
      year,
      typeOfEngine,
      typeOfGear
    };
    var str = "";
    for (var key in carData) {
      if (str != "") {
        str += "&";
      }
      if (carData[key] != undefined) {
        str += key + "=" + encodeURIComponent(carData[key]);
      }
    }
    this.props.history.push("/cars/search?" + str);
  };

  onChange = e => {
    if (e.target.name === "made") {
      this.getCarModels(e.target.value);
    }
    this.setState({ [e.target.name]: e.target.value });
  };

  getCarModels = made => {
    this.props.getModels(made);
  };

  componentDidMount() {
    this.props.getBrands();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      carBrands: nextProps.carBrands,
      carModels: nextProps.carModels
    });
  }

  render() {
    let { carBrands, carModels } = this.state;

    return (
      <div className="col-lg-3">
        <form onSubmit={this.onSubmit}>
          <h1 className="my-4">Търсене</h1>
          <SelectListGroup
            placeholder="Избери валута."
            name="vehicleType"
            value={this.state.vehicleType}
            onChange={this.onChange}
            options={options.vehicleType}
            multi
          />
          <SelectListGroup
            placeholder="Избери марка."
            name="made"
            value={this.state.made}
            options={carBrands}
            onChange={this.onChange}
            multi
          />
          <SelectListGroup
            placeholder="Избери марка."
            name="model"
            defaultOption="---"
            value={this.state.model}
            options={carModels}
            onChange={this.onChange}
          />
          <InputGroup
            placeholder="Максимална цена"
            name="price"
            type="number"
            icon="fas fa-dollar-sign"
            value={this.state.maxPrice}
            onChange={this.onChange}
          />
          <SelectListGroup
            placeholder="Избери валута."
            name="year"
            value={`${this.state.year}`}
            onChange={this.onChange}
            options={options.years}
          />
          <SelectListGroup
            placeholder="Тип двигател."
            name="typeOfEngine"
            value={this.state.typeOfEngine}
            onChange={this.onChange}
            options={options.typeOfEngine}
          />
          <SelectListGroup
            placeholder="Скоростна кутия."
            name="typeOfGear"
            value={this.state.typeOfGear}
            onChange={this.onChange}
            options={options.typeOfGear}
          />
          <input
            type="submit"
            value="Прегледай"
            className="btn btn-info btn-block mt-4"
          />
        </form>
      </div>
    );
  }
}

SmallSearch.propTypes = {
  loading: PropTypes.bool,
  getBrands: PropTypes.func,
  getModels: PropTypes.func,
  carBrands: PropTypes.array,
  carModels: PropTypes.array
};

const mapStateToProps = state => ({
  loading: state.carAdds.loading,
  getBrands: state.carAdds.getBrands,
  getModels: state.carAdds.getModels,
  carBrands: state.carsData.carBrands,
  carModels: state.carsData.carModels
});

export default connect(
  mapStateToProps,
  { getBrands, getModels }
)(withRouter(SmallSearch));
