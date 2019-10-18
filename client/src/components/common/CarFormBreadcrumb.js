import React from "react";

function CarFormBreadcrumb(props) {
  const { currentStep, brand, model, generation, variation } = props;
  let variat;

  const classFunc = (curr, num) => {
    if (curr === num) {
      return "text-warning";
    } else if (curr > num) {
      return "text-danger";
    } else {
      return "text-secondary";
    }
  };

  const breadcrumbOriginMade = (stepName, numStep) => {
    if (stepName && numStep <= 1) {
      return "Made > ";
    } else if (brand && brand === stepName) {
      return stepName;
    } else if (!brand) {
      return "Made > ";
    }
  };

  const breadcrumbOriginModel = (stepName, numStep) => {
    if (stepName && numStep <= 2) {
      return "Made > ";
    } else if (model && model === stepName) {
      return stepName;
    } else if (!model) {
      return "Model > ";
    }
  };

  const breadcrumbOriginGeneration = (stepName, numStep) => {
    if (stepName && numStep <= 3) {
      return "Generation > ";
    } else if (generation && generation === stepName) {
      return stepName;
    } else if (!generation) {
      return "Generation > ";
    }
  };

  const breadcrumbOriginVariation = (stepName, numStep) => {
    if (stepName && numStep <= 4) {
      return "Modification > ";
    } else if (variat && variat === stepName) {
      return stepName;
    } else if (!variat) {
      return "Modification > ";
    }
  };

  if (props.variation) {
    variat = props.variation.split("|")[1];
  }

  return (
    <div>
      <h5 className={classFunc(currentStep, 1)}>
        {breadcrumbOriginMade(brand, currentStep)}
      </h5>
      <h5 className={classFunc(currentStep, 2)}>
        {breadcrumbOriginModel(model, currentStep)}
      </h5>
      <h5 className={classFunc(currentStep, 3)}>
        {breadcrumbOriginGeneration(generation, currentStep)}
      </h5>
      <h5 className={classFunc(currentStep, 4)}>
        {breadcrumbOriginVariation(variat, currentStep)}
      </h5>
      <h5 className={classFunc(currentStep, 5)}>Car data</h5>
    </div>
  );
}
export default CarFormBreadcrumb;
