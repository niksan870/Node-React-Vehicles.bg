import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../../common/TextFieldGroup";
import TextAreaFieldGroup from "../../common/TextAreaFieldGroup";
import InputRadio from "../../common/InputRadio";
import InputGroup from "../../common/InputGroup";
import SelectListGroup from "../../common/SelectListGroup";
import { createProfile } from "../../../actions/profileActions";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      location: "",
      bio: "",
      day: "",
      gender: "",
      month: "",
      year: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };

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

    const profileData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      location: this.state.location,
      bio: this.state.bio,
      day: this.state.day,
      gender: this.state.gender,
      month: this.state.month,
      year: this.state.year,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;
    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />
          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />
          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />
          <InputGroup
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />
          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    // Select options for status
    const months = [
      { label: "* Select a month", value: 0 },
      { label: "Janaury", value: "Janaury" },
      { label: "February", value: "February" },
      { label: "March", value: "March" },
      { label: "April", value: "April" },
      { label: "May", value: "May" },
      { label: "June", value: "June" },
      { label: "July", value: "July" },
      { label: "August", value: "August" },
      { label: "September", value: "September" },
      { label: "October", value: "October" },
      { label: "November", value: "November" },
      { label: "December", value: "December" }
    ];

    let days = [{ label: "* Select a day", value: 0 }];
    for (let i = 1; i <= 31; i++) {
      days.push({ label: i, value: i });
    }

    let years = [{ label: "* Select a year", value: 0 }];
    for (let i = 1910; i <= new Date().getFullYear(); i++) {
      years.push({ label: i, value: i });
    }

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <div className="row">
                    <TextFieldGroup
                      placeholder="* First Name"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.onChange}
                      error={errors.firstName}
                    />
                    <TextFieldGroup
                      placeholder="* Last Name"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.onChange}
                      error={errors.lastName}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <InputGroup
                    placeholder="Phone number."
                    name="phoneNumber"
                    icon="fas fa-phone"
                    type="tel"
                    value={this.state.phoneNumber}
                    onChange={this.onChange}
                    error={errors.phoneNumber}
                  />
                  <InputGroup
                    placeholder="Location."
                    name="location"
                    icon="fas fa-map"
                    type="text"
                    value={this.state.location}
                    onChange={this.onChange}
                    error={errors.location}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">* Your age: </label>
                  <div className="input-group mb-3">
                    <SelectListGroup
                      placeholder="Day"
                      name="day"
                      value={this.state.day}
                      onChange={this.onChange}
                      options={days}
                      error={errors.day}
                    />
                    <SelectListGroup
                      placeholder="Month"
                      name="month"
                      value={this.state.month}
                      onChange={this.onChange}
                      options={months}
                      error={errors.month}
                    />
                    <SelectListGroup
                      placeholder="Year"
                      name="year"
                      value={this.state.year}
                      onChange={this.onChange}
                      options={years}
                      error={errors.year}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">* Your gender: </label>
                  <InputRadio
                    onChange={this.onChange}
                    className="mr-1"
                    name="gender"
                    value="male"
                    placeholder="Male"
                    icon="fas fa-mars"
                  />
                  <InputRadio
                    onChange={this.onChange}
                    className="mr-1"
                    name="gender"
                    value="female"
                    placeholder="Female"
                    icon="fas fa-venus"
                  />
                  <InputRadio
                    onChange={this.onChange}
                    className="mr-1"
                    name="gender"
                    value="other"
                    placeholder="Other"
                    icon="fas fa-transgender"
                  />
                </div>
                <div className="form-group">
                  <TextAreaFieldGroup
                    placeholder="Short Bio"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                    error={errors.bio}
                    info="Tell us a little about yourself"
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
