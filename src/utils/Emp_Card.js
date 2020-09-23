import React from "react";

function Card(props) {
  console.log(props);
  const searchedSorted = props.employees.filter( employee => (employee.firstName + " " + employee.lastName).toLowerCase().includes(props.search.toLowerCase())).sort( (a,b) => {
    let x = (a.firstName + a.lastName).toLowerCase();
    let y = (b.firstName + b.lastName).toLowerCase();
    if (props.sort === "asc") {
        if (x < y) return -1;
        if (x > y) return 1;
    } else {
        if (x > y) return -1;
        if (x < y) return 1;
    }
    return 0;
});
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
        {searchedSorted.map((person) => (
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
