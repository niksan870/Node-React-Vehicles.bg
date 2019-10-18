import React, { Component } from "react";
import DropDownReviews from "../Car/carAddsComponents/DropDownReviews";
import { getfirstTenCarReviews } from "../../actions/reviewsActions";
import FirstCarReviewsComp from "./FirstCarReviews/firstCarReviews";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class MainReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCarReviews: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      firstCarReviews: nextProps.firstCarReviews
    });
  }

  componentDidMount() {
    this.props.getfirstTenCarReviews();
  }

  render() {
    let carReviews;
    if (this.state.firstCarReviews.length > 0) {
      carReviews = (
        <FirstCarReviewsComp firstCarReviews={this.state.firstCarReviews} />
      );
    } else {
      carReviews = "";
    }
    return (
      <div>
        <DropDownReviews />
        {carReviews}
      </div>
    );
  }
}

MainReview.propTypes = {
  loading: PropTypes.bool,
  getfirstTenCarReviews: PropTypes.func,
  firstCarReviews: PropTypes.array
};

const mapStateToProps = state => ({
  loading: state.carAdds.loading,
  firstCarReviews: state.carsData.firstCarReviews
});

export default connect(
  mapStateToProps,
  { getfirstTenCarReviews }
)(MainReview);
