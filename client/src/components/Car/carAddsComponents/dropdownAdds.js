import React from "react";
import { Link } from "react-router-dom";

function dropdownAdds() {
  return (
    <div className="dropdown text-center">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-toggle="dropdown"
      >
        Добави превоно средство
      </button>
      <div className="dropdown-menu">
        <Link className="dropdown-item" to="/cars/add/text">
          Автомобил - Джип
        </Link>
        <Link className="dropdown-item" to="/add/motorcycle">
          Мотоциклет
        </Link>
        <a className="dropdown-item" href="#">
          Лодка
        </a>
      </div>
    </div>
  );
}
export default dropdownAdds;
