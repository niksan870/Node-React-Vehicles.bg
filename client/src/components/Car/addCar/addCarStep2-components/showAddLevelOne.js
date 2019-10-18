import React from "react";
import AdditionalInfoItem from "../addCarStep1-components/AddictionalInfoItem";
import AdditionalInfo from "./showAdditionalInfo";

function showAddLevelOne(props) {
  let { car } = props;

  let content, additionalInfoContent;
  if (car) {
    additionalInfoContent = car ? <AdditionalInfo car={car} /> : null;

    content = (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Марка</th>
              <th scope="col">Модел</th>
              <th scope="col">Модификация</th>
              <th scope="col">Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{car.made}</th>
              <td>{car.model}</td>
              <td>{car.modification}</td>
              <td>
                {car.price} {car.currency}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Дата на производство</th>
              <th scope="col">Тип двигател</th>
              <th scope="col">Мощност</th>
              <th scope="col">Евростандарт</th>
              <th scope="col">Скоростна кутия</th>
              <th scope="col">Категория</th>
              <th scope="col">Пробег</th>
              <th scope="col">Цвят</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {car.realeaseDateMonth} {car.realeaseDateYear}
              </td>
              <td>{car.typeOfEngine}</td>
              <td>{car.horsePower}</td>
              <td>{car.euroStandart}</td>
              <td>{car.typeOfGear}</td>
              <td>{car.category}</td>
              <td>{car.runningKMH} км.</td>
              <td>{car.runningKMH} км.</td>
            </tr>
          </tbody>
        </table>

        {additionalInfoContent}
      </div>
    );
  }

  return <div className="container h-100">{content}</div>;
}

export default showAddLevelOne;
