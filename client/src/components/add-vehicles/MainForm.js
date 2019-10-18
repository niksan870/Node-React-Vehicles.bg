import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { getCarAddsStepOne, getCarAddsStepTwo } from "../../actions/carActions";
import DropdownButton from "../Car/carAddsComponents/dropdownAdds";
import AddsLevelOne from "../Car/carAddsComponents/addsLevelOne";
import PublishedCars from "../Car/carAddsComponents/publishedCars";
import AwesomeComponentSpinner from "../common/AwesomeComponent";

class MainForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCarAddsStepOne();
    this.props.getCarAddsStepTwo();
  }

  render() {
    let { addsLevelOne, addsLevelTwo, loading } = this.props.carAdds;
    let content = [];

    if (loading) {
      content.push(
        <div className="text-center" key="0">
          <AwesomeComponentSpinner />
        </div>
      );
    } else {
      content.push(
        <div className="text-center" key="0">
          <AddsLevelOne cars={addsLevelOne} loading={loading} />
          <PublishedCars cars={addsLevelTwo} loading={loading} />
        </div>
      );
    }

    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-12">
            <div>
              <DropdownButton />
            </div>
          </div>
          <hr />
          {content}
          <hr />
        </div>
      </div>
    );
  }
}

MainForm.propTypes = {
  carAdds: PropTypes.object
};

const mapStateToProps = state => ({
  carAdds: state.carAdds
});

export default connect(
  mapStateToProps,
  { getCarAddsStepOne, getCarAddsStepTwo }
)(withRouter(MainForm));
