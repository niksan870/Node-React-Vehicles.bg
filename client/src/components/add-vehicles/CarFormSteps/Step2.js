import React, { Component } from "react";
import SelectListGroup from "../../common/SelectListGroup";

function Step2(props) {
  return (
    <SelectListGroup
      placeholder="Избери модел."
      name="model"
      value={props.model}
      options={props.carModels}
      onChange={props.handleChange}
      multi
    />
  );
}

export default Step2;
