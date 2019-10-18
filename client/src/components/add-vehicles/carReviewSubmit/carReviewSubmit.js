import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addReviewCar } from "../../../actions/reviewsActions";
import { getCurrentProfile } from "../../../actions/profileActions";
import TextFieldGroup from "../../common/TextFieldGroup";
import TextAreaFieldGroup from "../../common/TextAreaFieldGroup";

class carReviewSubmit extends Component {
  constructor() {
    super();

    this.state = {
      overAllRating: 1,
      safety: 1,
      price: 1,
      reliability: 1,
      performance: 1,
      technology: 1,
      comfort: 1,
      interior: 1,
      comment: "",
      title: "",
      profileHandle: ""
    };
  }

  onStarClick(nextValue, prevValue, name) {
    switch (true) {
      case name === "rate0":
        this.setState({ overAllRating: nextValue });
        break;
      case name === "rate1":
        this.setState({ safety: nextValue });
        break;
      case name === "rate2":
        this.setState({ price: nextValue });
        break;
      case name === "rate3":
        this.setState({ reliability: nextValue });
        break;
      case name === "rate4":
        this.setState({ performance: nextValue });
        break;
      case name === "rate5":
        this.setState({ technology: nextValue });
        break;
      case name === "rate6":
        this.setState({ comfort: nextValue });
        break;
      case name === "rate7":
        this.setState({ interior: nextValue });
        break;
      default:
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const reviewData = {
      title: this.state.title,
      comment: this.state.comment,
      overAllRating: this.state.overAllRating,
      safety: this.state.safety,
      price: this.state.price,
      reliability: this.state.reliability,
      performance: this.state.performance,
      technology: this.state.technology,
      comfort: this.state.comfort,
      interior: this.state.interior,
      profileFirstName: this.state.profileFirstName,
      profileLastName: this.state.profileLastName,
      profileAvatar: this.state.profileAvatar,
      profileHandle: this.state.profileHandle
    };

    this.props.addReviewCar(reviewData, this.props.history);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      profileFirstName: nextProps.profile.firstName,
      profileLastName: nextProps.profile.lastName,
      profileAvatar: nextProps.profile.avatar,
      profileHandle: nextProps.profile.handle
    });
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const {
      overAllRating,
      safety,
      price,
      reliability,
      performance,
      technology,
      comfort,
      interior
    } = this.state;

    return (
      <div className="col-12">
        <form>
          <div className="form-row">
            <div className="form-group col-12">
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">
                  Цялостен рейтинг:
                  <StarRatingComponent
                    name="rate0"
                    starCount={5}
                    value={overAllRating}
                    onStarClick={this.onStarClick.bind(this)}
                  />
                </label>
                <TextFieldGroup
                  placeholder="Напиши заглавие..."
                  name="title"
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange}
                  error={this.props.errors.carReviwTitle}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="exampleFormControlTextarea1">Съдържание: </label>
              <TextAreaFieldGroup
                className="form-control"
                name="comment"
                onChange={this.handleChange}
                value={this.state.comment}
                error={this.props.errors.carReviewComment}
                info=""
                rows="3"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Безобасност: </label>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={safety}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Представяне: </label>
              <StarRatingComponent
                name="rate2"
                starCount={5}
                value={price}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Комфорт: </label>
              <StarRatingComponent
                name="rate3"
                starCount={5}
                value={reliability}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Цена: </label>
              <StarRatingComponent
                name="rate4"
                starCount={5}
                value={performance}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Технология: </label>
              <StarRatingComponent
                name="rate5"
                starCount={5}
                value={technology}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Интериор: </label>
              <StarRatingComponent
                name="rate6"
                starCount={5}
                value={comfort}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12 text-cetner">
              <label htmlFor="inputState">Надежност: </label>
              <StarRatingComponent
                name="rate7"
                starCount={5}
                value={interior}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
          </div>
          <div className="form-row text-cetner">
            <div className="form-group col-md-12 text-center">
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn btn-primary"
              >
                Изпрати
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

carReviewSubmit.propTypes = {
  loading: PropTypes.bool,
  addReviewCar: PropTypes.func,
  getCurrentProfile: PropTypes.func,
  errors: PropTypes.object,
  profile: PropTypes.object
};

const mapStateToProps = state => ({
  loading: state.carAdds.loading,
  errors: state.errors,
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  { addReviewCar, getCurrentProfile }
)(carReviewSubmit);
