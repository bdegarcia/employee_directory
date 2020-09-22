import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div>
      {props.employees.map((person) => (
        <div className="card text-white bg-info mb-3">
          <div class="card-header">
            {person.firstName} {person.lastName}
          </div>
          <div class="card-body">
            <p>{person.email}</p>
            <p>{person.phone}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

// {/* <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
  
//     <h5 class="card-title">Info card title</h5>
//     <p class="card-text">
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </p>
//   </div>
// </div>; */}
