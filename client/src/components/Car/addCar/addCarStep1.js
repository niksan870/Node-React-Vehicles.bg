import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import InputGroup from "../../common/InputGroup";
import SelectListGroup from "../../common/SelectListGroup";
import AddictionalInfoItem from "./addCarStep1-components/AddictionalInfoItem";
import stateObject from "./addCarStep1-components/stateObject";
import options from "../../common/options";
import CheckboxGroup from "../../common/CheckboxGroup";
import { addCarStep1 } from "../../../actions/carActions";
import { getBrands, getModels } from "../../../actions/carsDataActions";

class AddCarReview extends Component {
  constructor(props) {
    super(props);
    this.state = stateObject;

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const carData = {
      made: this.state.made,
      model: this.state.model,
      modification: this.state.modification,
      typeOfEngine: this.state.typeOfEngine,
      euroStandart: this.state.euroStandart,
      condition: this.state.condition,
      typeOfGear: this.state.typeOfGear,
      price: this.state.price,
      category: this.state.category,
      currency: this.state.currency,
      realeaseDateMonth: this.state.realeaseDateMonth,
      realeaseDateYear: this.state.realeaseDateYear,
      runningKMH: this.state.runningKMH,
      colours: this.state.colours,
      region: this.state.region,
      horsePower: this.state.horsePower,
      populatedPlace: this.state.populatedPlace,
      safety: this.state.safetyArray,
      comfort: this.state.comfortArray,
      another: this.state.anotherArray,
      protection: this.state.protectionArray,
      interior: this.state.interiorArray,
      specialized: this.state.specializedArray,
      exterior: this.state.exteriorArray
    };

    this.props.addCarStep1(carData, this.props.history);
  }

  setAdditionalInfoHandle = (cashe, option, selectCashe) => {
    this.setState({
      additionalInfoCashe: cashe,
      selectedAdditionalOption: option,
      additionalInfoSelectCashe: selectCashe
    });
  };

  onAddtionalInfoChange = e => {
    switch (e.target.value) {
      case "safety":
        this.setAdditionalInfoHandle(
          this.state.safety,
          this.state.value,
          e.target.value
        );
        break;
      case "comfort":
        this.setAdditionalInfoHandle(
          this.state.comfort,
          this.state.value,
          e.target.value
        );
        break;
      case "another":
        this.setAdditionalInfoHandle(
          this.state.another,
          this.state.value,
          e.target.value
        );
        break;
      case "protection":
        this.setAdditionalInfoHandle(
          this.state.protection,
          this.state.value,
          e.target.value
        );
        break;
      case "interior":
        this.setAdditionalInfoHandle(
          this.state.interior,
          this.state.value,
          e.target.value
        );
        break;
      case "specialized":
        this.setAdditionalInfoHandle(
          this.state.specialized,
          this.state.value,
          e.target.value
        );
        break;
      case "exterior":
        this.setAdditionalInfoHandle(
          this.state.exterior,
          this.state.value,
          e.target.value
        );
        break;
      default:
        this.setAdditionalInfoHandle("", "", "");
    }
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    let errors = { ...this.state.errors };
    delete errors[e.target.name];
    this.setState({ errors });

    if (e.target.name === "made") {
      this.getCarModel(e.target.value);
    }
  }

  getArrByGivenArgName = argName => {
    let {
      safety,
      comfort,
      another,
      interior,
      protection,
      specialized,
      exterior
    } = this.state;

    switch (true) {
      case argName === "safety":
        return safety;
      case argName === "comfort":
        return comfort;
      case argName === "another":
        return another;
      case argName === "protection":
        return protection;
      case argName === "interior":
        return interior;
      case argName === "specialized":
        return specialized;
      case argName === "exterior":
        return exterior;
      default:
        console.log("Something went wrong.");
        break;
    }
  };

  handleCheckedSwtichTrue = (
    arrayName,
    caseName,
    caseValue,
    changeCheckedCheckBoxInArray
  ) => {
    let optionsArr = this.getArrByGivenArgName(changeCheckedCheckBoxInArray);

    this.setState({
      [caseName]: [...arrayName, caseValue],
      changeCheckedCheckBoxInArray: optionsArr.filter(function(record) {
        if (record.value === caseValue) {
          return (record.checked = true);
        } else {
          return record;
        }
      })
    });
  };

  handleCheckedSwtichFalse = (
    arrayName,
    caseName,
    caseValue,
    changeCheckedCheckBoxInArray
  ) => {
    let optionsArr = this.getArrByGivenArgName(changeCheckedCheckBoxInArray);

    this.setState({
      [caseName]: arrayName.filter(function(record) {
        return record !== caseValue;
      }),
      changeCheckedCheckBoxInArray: optionsArr.filter(function(record) {
        if (record.value === caseValue) {
          return (record.checked = false);
        } else {
          return record;
        }
      })
    });
  };

  handleChecked = e => {
    switch (this.state.additionalInfoSelectCashe) {
      case "safety":
        if (e.target.checked) {
          this.handleCheckedSwtichTrue(
            this.state.safetyArray,
            "safetyArray",
            e.target.value,
            "safety"
          );
        } else {
          this.handleCheckedSwtichFalse(
            this.state.safetyArray,
            "safetyArray",
            e.target.value,
            "safety"
          );
        }
        break;
      case "comfort":
        if (e.target.checked) {
          this.handleCheckedSwtichTrue(
            this.state.comfortArray,
            "comfortArray",
            e.target.value,
            "comfort"
          );
        } else {
          this.handleCheckedSwtichFalse(
            this.state.comfortArray,
            "comfortArray",
            e.target.value,
            "comfort"
          );
        }
        break;
      case "another":
        if (e.target.checked) {
          this.handleCheckedSwtichTrue(
            this.state.anotherArray,
            "anotherArray",
            e.target.value,
            "another"
          );
        } else {
          this.handleCheckedSwtichFalse(
            this.state.anotherArray,
            "anotherArray",
            e.target.value,
            "another"
          );
        }
        break;
      case "protection":
        if (e.target.checked) {
          this.handleCheckedSwtichTrue(
            this.state.protectionArray,
            "protectionArray",
            e.target.value,
            "protection"
          );
        } else {
          this.handleCheckedSwtichFalse(
            this.state.protectionArray,
            "protectionArray",
            e.target.value,
            "protection"
          );
        }
        break;
      case "interior":
        if (e.target.checked) {
          this.handleCheckedSwtichTrue(
            this.state.interiorArray,
            "interiorArray",
            e.target.value,
            "interior"
          );
        } else {
          this.handleCheckedSwtichFalse(
            this.state.interiorArray,
            "interiorArray",
            e.target.value,
            "interior"
          );
        }
        break;
      case "specialized":
        if (e.target.checked) {
          this.handleCheckedSwtichTrue(
            this.state.specializedArray,
            "specializedArray",
            e.target.value,
            "specialized"
          );
        } else {
          this.handleCheckedSwtichFalse(
            this.state.specializedArray,
            "specializedArray",
            e.target.value,
            "specialized"
          );
        }
        break;
      case "exterior":
        if (e.target.checked) {
          this.handleCheckedSwtichTrue(
            this.state.exteriorArray,
            "exteriorArray",
            e.target.value,
            "exterior"
          );
        } else {
          this.handleCheckedSwtichFalse(
            this.state.exteriorArray,
            "exteriorArray",
            e.target.value,
            "exterior"
          );
        }
        break;
      default:
        console.log("default");
    }
  };

  getCarModel = brand => {
    this.props.getModels(brand);
  };

  componentDidMount() {
    this.props.getBrands();
  }

  render() {
    const { carModels, carBrands } = this.props;
    const {
      errors,
      additionalInfoCashe,
      safetyArray,
      comfortArray,
      anotherArray,
      protectionArray,
      interiorArray,
      specializedArray,
      exteriorArray
    } = this.state;
    let additionalInfoOptions;

    let cashedArray = {
      safety: [],
      comfort: [],
      another: [],
      protection: [],
      interior: [],
      specialized: [],
      exterior: []
    };

    if (safetyArray.length > 0) {
      cashedArray.safety.push(
        <AddictionalInfoItem
          key={Math.random() * 100}
          items={safetyArray}
          name="Безопасност"
        />
      );
    }
    if (comfortArray.length > 0) {
      cashedArray.comfort.push(
        <AddictionalInfoItem
          key={Math.random() * 100}
          items={comfortArray}
          name="Комфорт"
        />
      );
    }
    if (anotherArray.length > 0) {
      cashedArray.another.push(
        <AddictionalInfoItem
          key={Math.random() * 100}
          items={anotherArray}
          name="Други"
        />
      );
    }
    if (protectionArray.length > 0) {
      cashedArray.protection.push(
        <AddictionalInfoItem
          key={Math.random() * 100}
          items={protectionArray}
          name="Защита"
        />
      );
    }
    if (interiorArray.length > 0) {
      cashedArray.interior.push(
        <AddictionalInfoItem
          key={Math.random() * 100}
          items={interiorArray}
          name="Интериор"
        />
      );
    }
    if (specializedArray.length > 0) {
      cashedArray.specialized.push(
        <AddictionalInfoItem
          key={Math.random() * 100}
          items={specializedArray}
          name="Специализирани"
        />
      );
    }
    if (exteriorArray.length > 0) {
      cashedArray.exterior.push(
        <AddictionalInfoItem
          key={Math.random() * 100}
          items={exteriorArray}
          name="Екстериор"
        />
      );
    }

    if (additionalInfoCashe) {
      additionalInfoOptions = additionalInfoCashe.map(option => {
        return (
          <CheckboxGroup
            name={option.value}
            placeholder={option.value}
            value={option.value}
            key={option.value}
            checked={option.checked}
            onChange={this.handleChecked}
          />
        );
      });
    }

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Автомобил - Джип</h1>
              <small className="d-block pb-3">* = Задължителни полета</small>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <SelectListGroup
                        placeholder="Избери марка."
                        name="made"
                        value={this.state.made}
                        options={carBrands}
                        onChange={this.onChange}
                        multi
                      />
                    </div>
                    <div className="col-4">
                      <SelectListGroup
                        placeholder="Избери модел."
                        name="model"
                        value={this.state.model}
                        options={carModels}
                        onChange={this.onChange}
                        multi
                      />
                    </div>
                    <div className="col-4">
                      <InputGroup
                        placeholder="Модификация."
                        name="modification"
                        icon="fas fa-car-side"
                        type="text"
                        value={this.state.modification}
                        onChange={this.onChange}
                        error={errors.modification}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <SelectListGroup
                        placeholder="Тип двигател."
                        name="typeOfEngine"
                        value={this.state.typeOfEngine}
                        onChange={this.onChange}
                        options={options.typeOfEngine}
                        error={errors.typeOfEngine}
                      />
                    </div>

                    <div className="col-4">
                      <SelectListGroup
                        placeholder="Condition"
                        name="condition"
                        value={this.state.condition}
                        onChange={this.onChange}
                        options={options.condition}
                        error={errors.condition}
                      />
                    </div>
                    <div className="col-4">
                      <InputGroup
                        placeholder="Мощност."
                        name="horsePower"
                        icon="fas fa-horse-head"
                        type="number"
                        value={this.state.location}
                        onChange={this.onChange}
                        error={errors.location}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <SelectListGroup
                        placeholder="Евростандарт"
                        name="euroStandart"
                        value={this.state.euroStandart}
                        onChange={this.onChange}
                        options={options.euroStandart}
                        error={errors.euroStandart}
                      />
                    </div>
                    <div className="col-4">
                      <SelectListGroup
                        placeholder="Скоростна кутия."
                        name="typeOfGear"
                        value={this.state.typeOfGear}
                        onChange={this.onChange}
                        options={options.typeOfGear}
                        error={errors.typeOfGear}
                      />
                    </div>
                    <div className="col-4">
                      <SelectListGroup
                        placeholder="Категория"
                        name="category"
                        value={this.state.category}
                        onChange={this.onChange}
                        options={options.category}
                        error={errors.category}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <h5>Цена: </h5>
                  <div className="row">
                    <div className="col-6">
                      <InputGroup
                        placeholder="Цена."
                        name="price"
                        type="number"
                        icon="fas fa-dollar-sign"
                        value={this.state.price}
                        onChange={this.onChange}
                        error={errors.price}
                      />
                    </div>
                    <div className="col-6">
                      <SelectListGroup
                        placeholder="Избери валута."
                        name="currency"
                        value={this.state.currency}
                        onChange={this.onChange}
                        options={options.currency}
                        error={errors.currency}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <SelectListGroup
                        placeholder="Месец."
                        name="realeaseDateMonth"
                        value={this.state.months}
                        onChange={this.onChange}
                        options={options.months}
                        error={errors.realeaseDateMonth}
                      />
                    </div>
                    <div className="col-4">
                      <SelectListGroup
                        placeholder="Избери валута."
                        name="realeaseDateYear"
                        value={this.state.realeaseDateYear}
                        onChange={this.onChange}
                        options={options.years}
                        error={errors.realeaseDateYear}
                      />
                    </div>
                    <div className="col-4">
                      <InputGroup
                        placeholder="Пробег в км."
                        name="runningKMH"
                        type="number"
                        icon="fas fa-road"
                        value={this.state.runningKMH}
                        onChange={this.onChange}
                        error={errors.runningKMH}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <SelectListGroup
                        placeholder="Месец."
                        name="colours"
                        value={this.state.colours}
                        onChange={this.onChange}
                        options={options.colours}
                        error={errors.colours}
                      />
                    </div>
                    <div className="col-4">
                      <SelectListGroup
                        placeholder="Регион."
                        name="region"
                        value={this.state.region}
                        onChange={this.onChange}
                        options={options.region}
                        error={errors.region}
                      />
                    </div>
                    <div className="col-4">
                      <InputGroup
                        placeholder="Населено място."
                        name="populatedPlace"
                        type="text"
                        icon="fas fa-map"
                        value={this.state.populatedPlace}
                        onChange={this.onChange}
                        error={errors.populatedPlace}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="">Допълнителна информация: </label>
                      <SelectListGroup
                        placeholder="Избери допълнителна информация."
                        name="additionalInfo"
                        value={this.state.additionalInfoSelectCashe}
                        onChange={this.onAddtionalInfoChange}
                        options={options.additionalInfo}
                        error={errors.colours}
                      />
                    </div>
                    <div className="col-8"> {additionalInfoOptions} </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    {cashedArray.safety}
                    {cashedArray.comfort}
                    {cashedArray.another}
                    {cashedArray.protection}
                    {cashedArray.interior}
                    {cashedArray.specialized}
                    {cashedArray.exterior}
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="submit"
                        value="Прегледай"
                        className="btn btn-info btn-block mt-4"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddCarReview.propTypes = {
  errors: PropTypes.object.isRequired,
  carBrands: PropTypes.array,
  carModels: PropTypes.array
};

const mapStateToProps = state => ({
  errors: state.errors,
  carBrands: state.carsData.carBrands,
  carModels: state.carsData.carModels
});

export default connect(
  mapStateToProps,
  { addCarStep1, getBrands, getModels }
)(withRouter(AddCarReview));
