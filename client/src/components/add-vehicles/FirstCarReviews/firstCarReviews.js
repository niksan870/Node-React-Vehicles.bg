import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import StarRatingComponent from "react-star-rating-component";

class firstCarReviews extends Component {
  render() {
    let { firstCarReviews } = this.props;
    let content = {};
    if (firstCarReviews) {
      content = firstCarReviews.map((review, index) => {
        return (
          <div key={index}>
            <div>
              <h2>
                <a href={"/reviews/car/" + review._id}>
                  <img src={review.profileAvatar} alt="" />{" "}
                  {review.profileFirstName}
                </a>
              </h2>
            </div>
            <h1>{review.title}</h1>
            <StarRatingComponent
              name="rate0"
              starCount={5}
              value={review.overAllRating}
            />
          </div>
        );
      });
    }
    return <div>{content}</div>;
  }
}

firstCarReviews.propTypes = {
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  loading: state.carAdds.loading
});

export default connect(
  mapStateToProps,
  {}
)(firstCarReviews);
