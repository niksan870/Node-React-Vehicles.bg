import React, { Component } from "react";
import SelectListGroup from "../../common/SelectListGroup";

function Step1(props) {
  // The markup for the Step 1 UI
  return (
    <div className="form-group">
      <SelectListGroup
        placeholder="Избери марка."
        name="brand"
        value={props.brand}
        options={props.carBrands}
        onChange={props.handleChange}
        multi
      />
    </div>
  );
}
export default Step1;
