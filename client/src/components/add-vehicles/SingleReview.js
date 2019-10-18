import React, { Component } from "react";
import { getSingleCarReview } from "../../actions/reviewsActions";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SingleReview extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    let { history } = this.props;
    this.props.getSingleCarReview(id, history);
  }

  render() {
    let content;
    let comment = this.props.singleCarReview;
    console.log(comment);
    if (comment != null) {
      content = (
        <div className="col-12">
          <h3>
            <a href={"/profile/" + comment.profileHandle}>
              {comment.profileFirstName} {comment.profileLastName}
            </a>
          </h3>
          <h2>{comment.title}</h2>
          <span>
            <StarRatingComponent
              name="rate0"
              starCount={5}
              value={comment.overAllRating}
            />
          </span>
          <p>{comment.comment}</p>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

SingleReview.propTypes = {
  loading: PropTypes.bool,
  getSingleCarReview: PropTypes.func,
  singleCarReview: PropTypes.object
};

const mapStateToProps = state => ({
  loading: state.carAdds.loading,
  singleCarReview: state.carsData.singleCarReview
});

export default connect(
  mapStateToProps,
  { getSingleCarReview }
)(SingleReview);
