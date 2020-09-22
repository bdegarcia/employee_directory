import React from "react";

function Card(props) {
  console.log(props);
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((person) => (
            <tr>
          <th>{person.firstName}</th>
          <th>{person.lastName}</th>
          <th>{person.email}</th>
          <th>{person.phone}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Card;
