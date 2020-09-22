import React from 'react';
import './App.css';
// import employees from "./utils/employees"
import Card from "./utils/Emp_Card"

const employees = [
  {
    id: 1,
    firstName: "Adam",
    lastName: "Jackson",
    phone: "847-555-6620",
    email: "ajackson@realfakedoors.com",
  },
  {
    id: 2,
    firstName: "Beth",
    lastName: "Iverson",
    phone: "847-555-6621",
    email: "biverson@realfakedoors.com",
  },
  {
    id: 3,
    firstName: "Charles",
    lastName: "Hoffman",
    phone: "847-555-6622",
    email: "choffman@realfakedoors.com",
  },
  {
    id: 4,
    firstName: "Devona",
    lastName: "Giffin",
    phone: "847-555-6623",
    email: "dgriffin@realfakedoors.com",
  },
  {
    id: 5,
    firstName: "Ericka",
    lastName: "Fuller",
    phone: "847-555-6624",
    email: "efuller@realfakedoors.com",
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "Elliot",
    phone: "847-555-6625",
    email: "felliot@realfakedoors.com",
  },
  {
    id: 7,
    firstName: "Guy",
    lastName: "Dixon",
    phone: "  847-555-6626",
    email: "gdixon@realfakedoors.com",
  },
  {
    id: 8,
    firstName: "Harold",
    lastName: "Carter",
    phone: "847-555-6627",
    email: "hcarter@realfakedoors.com",
  },
  {
    id: 9,
    firstName: "Isabelle",
    lastName: "Baker",
    phone: "847-555-6628",
    email: "ibaker@realfakedoors.com",
  },
  {
    id: 10,
    firstName: "Jill",
    lastName: "Avila",
    phone: "847-555-6629",
    email: "javila@realfakedoors.com",
  }
];

function App() {
  return (
    <div className="body">
    <div className="jumbotron jumbotron-fluid text-center">
      <h1>Real Fake Doors Employee Directory</h1>
    </div>
    <Card employees={employees} />
    </div>
  );
}

export default App;
