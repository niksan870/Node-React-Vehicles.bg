import React, { Component } from "react";
import { Link } from "react-router-dom";
import AwesomeComponentSpinner from "../../common/AwesomeComponent";

function publishedCars(props) {
  let cars, content;

  if (props.cars) {
    cars = props.cars.map((car, index) => {
      if (car.type === "car") {
        return (
          <tr key={car.handle}>
            <th scope="row">{++index}</th>
            <td>Автомобил - Джип</td>
            <td>
              <Link to={`/cars/single/${car.handle}`}>
                {car.made} - {car.model}
              </Link>
            </td>
            <td>
              {car.realeaseDateMonth} {car.realeaseDateYear}
            </td>
            <td>
              {car.price} {car.currency}
            </td>
          </tr>
        );
      } else if (car.type === "motorcycle") {
        return (
          <tr key={car.handle}>
            <th scope="row">{++index}</th>
            <td>
              <Link to="#">
                {car.made} - {car.model}
              </Link>
            </td>
            <td>
              {car.realeaseDateMonth} {car.realeaseDateYear}
            </td>
            <td>
              {car.price} {car.currency}
            </td>
          </tr>
        );
      }
    });
  }

  content = (
    <div>
      <h2>Твоите обяви</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Вид</th>
            <th scope="col">Модел - Марка</th>
            <th scope="col">Дата</th>
            <th scope="col">Цена</th>
          </tr>
        </thead>
        <tbody>{cars}</tbody>
      </table>
    </div>
  );

  return <div className="col-12">{content}</div>;
}

export default publishedCars;
