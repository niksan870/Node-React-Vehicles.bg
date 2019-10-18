import React, { Component } from "react";
import CarouselComp from "./sidebar/CarouselComp";
import CarSection from "./sidebar/CarSection";

class MainSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-lg-9">
        <CarSection />
      </div>
    );
  }
}

export default MainSection;
