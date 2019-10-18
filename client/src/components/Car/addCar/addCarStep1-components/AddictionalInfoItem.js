import React from "react";

function AddictionalInfoItem(props) {
  let trBody = [];
  props.items.map(item => {
    trBody.push(
      <tr key={item}>
        <td>{item}</td>
      </tr>
    );
  });
  return (
    <div className="col-4">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">{props.name}</th>
          </tr>
        </thead>
        <tbody>{trBody}</tbody>
      </table>
    </div>
  );
}

export default AddictionalInfoItem;
