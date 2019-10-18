import React, { Component } from "react";
import { Link } from "react-router-dom";
import AwesomeComponentSpinner from "../../common/AwesomeComponent";

function addsLevelOne(state) {
  let cars, content;

  if (state.cars) {
    cars = state.cars.map((car, index) => {
      if (car.type === "car") {
        return (
          <tr key={car.handle}>
            <th scope="row">{++index}</th>
            <td>Автомобил - Джип</td>
            <td>
              <Link to={`/cars/add/step-two/${car.handle}`}>
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

    if (state.loading) {
      content = (
        <div className="text-center">
          <AwesomeComponentSpinner />
        </div>
      );
    } else {
      content = (
        <div>
          <h2>Добави снимки към автомобила и приключи обявата: </h2>

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
    }

    return <div className="col-12">{content}</div>;
  }
}

export default addsLevelOne;
