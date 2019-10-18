import React, { Component } from "react";
import Sidebar from "./sidebar/Sidebar";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import SmallSearch from "./sidebar/SmallSearch";
import MainSection from "./MainSection";
import CarouselComp from "./sidebar/CarouselComp";
import Spinner from "../common/AwesomeComponent";

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var content, spinner;
    content = (
      <div className={"row " + (!this.props.loading ? "show" : "hide")}>
        <SmallSearch />
        <CarouselComp />
        <div class="col-4" />
        <div class="col-8">
          <MainSection />
        </div>
      </div>
    );
    spinner = (
      <div className={this.props.loading ? "show" : "hide"}>
        <Spinner />
      </div>
    );
    return (
      <div className="container">
        {content} {spinner}
      </div>
    );
  }
}

Landing.propTypes = {
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  errors: state.errors,
  loading: state.carAdds.loading
});

export default connect(
  mapStateToProps,
  {}
)(withRouter(Landing));
