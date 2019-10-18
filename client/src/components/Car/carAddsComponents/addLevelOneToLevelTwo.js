import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class AddLevelOneToLevelTwo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>Car</div>;
  }
}

AddLevelOneToLevelTwo.propTypes = {
  carAdds: PropTypes.object
};

const mapStateToProps = state => ({
  carAdds: state.carAdds
});

export default connect(
  mapStateToProps,
  {}
)(withRouter(AddLevelOneToLevelTwo));
