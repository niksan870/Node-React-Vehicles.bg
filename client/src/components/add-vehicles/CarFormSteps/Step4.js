import React, { Component } from "react";
import SelectListGroup from "../../common/SelectListGroup";

function Step4(props) {
  let options = [];

  if (props.carVariations) {
    options = props.carVariations[0].modification.map(modification => {
      let value =
        modification[0].link.split("/").slice(-1)[0] +
        "|" +
        modification[0].title;
      return {
        label: modification[0].title,
        value: value
      };
    });
  }
  return (
    <SelectListGroup
      placeholder="Избери Модификация."
      name="modification"
      value={props.modification}
      options={options}
      onChange={props.handleChange}
      multi
    />
  );
}

export default Step4;
