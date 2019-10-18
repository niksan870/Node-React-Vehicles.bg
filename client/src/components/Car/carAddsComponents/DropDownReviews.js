import React from "react";
import { Link } from "react-router-dom";

function dropdownAdds() {
  return (
    <div className="col-12">
      <div className="dropdown text-center">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
        >
          Добави ревю
        </button>
        <div className="dropdown-menu">
          <Link className="dropdown-item" to="/review/cars/add">
            Автомобил - Джип
          </Link>
          <Link className="dropdown-item" to="/review/motorcycle/add">
            Мотоциклет
          </Link>
          <a className="dropdown-item" href="/review/boat/add">
            Лодка
          </a>
        </div>
      </div>
    </div>
  );
}
export default dropdownAdds;
