import React, { Component } from "react";
import CarReviewSubmit from "../carReviewSubmit/carReviewSubmit";

class Step5 extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    console.log(123);
    return "";
    // const { finalCar } = this.props;
    // let data,
    //   reviewForm,
    //   carData = "";
    // let buttonText = "Show More...";
    // let header = [];
    // let images = [];
    // console.log(typeof finalCar);

    // if (finalCar.data) {
    //   for (let i = 0; i < finalCar.data.length; i++) {
    //     data += "<h2>" + finalCar.data[i].title + "</h2>";
    //     data +=
    //       "<table className='table table-dark'>" +
    //       finalCar.data[i].info +
    //       "</table>";
    //   }
    // }

    // if (finalCar.header) {
    //   for (let i = 0; i < finalCar.header.length; i++) {
    //     header.push(
    //       <div
    //         key={finalCar.header[i].img}
    //         className="d-inline-block"
    //         style={{
    //           margin: "50px 50px 50px 0px"
    //         }}
    //       >
    //         <img
    //           src={finalCar.header[i].img}
    //           alt={finalCar.header[i].alt}
    //           title={finalCar.header[i].alt}
    //         />
    //         <br />
    //         {finalCar.header[i].text}
    //         <span>
    //           {" "}
    //           см<sup>3</sup>
    //         </span>
    //       </div>
    //     );
    //   }
    // }

    // if (finalCar.images) {
    //   for (let i = 0; i < finalCar.images.length; i++) {
    //     images.push(
    //       <img
    //         style={{ marginRight: "40px", marginBottom: "50px" }}
    //         key={finalCar.images[i]}
    //         src={finalCar.images[i]}
    //       />
    //     );
    //   }
    // }

    // if (this.props.currentStep !== 5) {
    //   return null;
    // }

    // if (this.props.showExtendedCarData) {
    //   carData = (
    //     <div className="row">
    //       <div className="col-md-12 text-secondary">
    //         <div dangerouslySetInnerHTML={{ __html: data }} />
    //       </div>
    //     </div>
    //   );
    //   buttonText = "Show less...";
    // } else {
    //   carData = null;
    //   buttonText = "Show more...";
    // }

    // if (this.props.writeReviewsFrom) {
    //   reviewForm = <CarReviewSubmit />;
    // } else {
    //   reviewForm = null;
    // }

    // return (
    //   <div className="constainer">
    //     <div className="row">
    //       <div className="col-md-12">{header}</div>
    //       <div className="col-md-12">{images}</div>
    //     </div>

    //     {carData}
    //     {reviewForm}

    //     <div className="row">
    //       <div className="col-md-6 text-center">
    //         <button
    //           onClick={this.props.loadMore}
    //           type="button"
    //           className="text-center btn btn-primary"
    //         >
    //           {buttonText}
    //         </button>
    //       </div>
    //       <div className="col-md-6 text-center">
    //         <button
    //           onClick={this.props.writeReviews}
    //           type="button"
    //           className="text-center btn btn-primary"
    //         >
    //           Write a review
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default Step5;
