import React, { Component } from "react";
import SelectListGroup from "../../common/SelectListGroup";

function Step3(props) {
  let options;
  if (props.carGenerations) {
    options = props.carGenerations.map(generation => {
      return {
        label: generation.generations[0][0].name,
        value: generation.generations[0][0].name
      };
    });
  }

  return (
    <SelectListGroup
      placeholder="Избери Генерация."
      name="generation"
      value={props.generation}
      options={options}
      onChange={props.handleChange}
      multi
    />
  );
}
export default Step3;
