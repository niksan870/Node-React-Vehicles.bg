import React from "react";
import AdditionalInfoItem from "../addCarStep1-components/AddictionalInfoItem";

function showAdditionalInfo(props) {
  let safety, comfort, another, interior, specialized, exterior, protection;

  if (props.car) {
    safety =
      props.car.safety.length > 0 ? (
        <AdditionalInfoItem
          key={Math.random() * 100}
          items={props.car.safety}
          name="Безопасност"
        />
      ) : null;

    comfort =
      props.car.comfort.length > 0 ? (
        <AdditionalInfoItem
          key={Math.random() * 100}
          items={props.car.comfort}
          name="Комфорт"
        />
      ) : null;

    another =
      props.car.another.length > 0 ? (
        <AdditionalInfoItem
          key={Math.random() * 100}
          items={props.car.another}
          name="Други"
        />
      ) : null;

    protection =
      props.car.protection.length > 0 ? (
        <AdditionalInfoItem
          key={Math.random() * 100}
          items={props.car.protection}
          name="Защита"
        />
      ) : null;
    interior =
      props.car.interior.length > 0 ? (
        <AdditionalInfoItem
          key={Math.random() * 100}
          items={props.car.interior}
          name="Интериор"
        />
      ) : null;
    specialized =
      props.car.specialized.length > 0 ? (
        <AdditionalInfoItem
          key={Math.random() * 100}
          items={props.car.specialized}
          name="Специализирани"
        />
      ) : null;
    exterior =
      props.car.exterior.length > 0 ? (
        <AdditionalInfoItem
          key={Math.random() * 100}
          items={props.car.exterior}
          name="Екстериор"
        />
      ) : null;
  }

  return (
    <div className="row">
      {safety}
      {comfort}
      {another}
      {protection}
      {interior}
      {specialized}
      {exterior}
    </div>
  );
}

export default showAdditionalInfo;
