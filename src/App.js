import React, { useState } from "react";
import "./App.css";
// import employees from "./utils/employees"
import Card from "./utils/Emp_Card";

const employees = [
  {
    id: 9,
    firstName: "Isabelle",
    lastName: "Baker",
    phone: "847-555-6628",
    email: "ibaker@realfakedoors.com",
  },
  {
    id: 1,
    firstName: "Adam",
    lastName: "Jackson",
    phone: "847-555-6620",
    email: "ajackson@realfakedoors.com",
  },
  {
    id: 3,
    firstName: "Charles",
    lastName: "Hoffman",
    phone: "847-555-6622",
    email: "choffman@realfakedoors.com",
  },
  {
    id: 5,
    firstName: "Ericka",
    lastName: "Fuller",
    phone: "847-555-6624",
    email: "efuller@realfakedoors.com",
  },
  {
    id: 4,
    firstName: "Devona",
    lastName: "Giffin",
    phone: "847-555-6623",
    email: "dgriffin@realfakedoors.com",
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "Elliot",
    phone: "847-555-6625",
    email: "felliot@realfakedoors.com",
  },
  {
    id: 8,
    firstName: "Harold",
    lastName: "Carter",
    phone: "847-555-6627",
    email: "hcarter@realfakedoors.com",
  },
  {
    id: 7,
    firstName: "Guy",
    lastName: "Dixon",
    phone: "  847-555-6626",
    email: "gdixon@realfakedoors.com",
  },
  {
    id: 10,
    firstName: "Jill",
    lastName: "Avila",
    phone: "847-555-6629",
    email: "javila@realfakedoors.com",
  },
  {
    id: 2,
    firstName: "Beth",
    lastName: "Iverson",
    phone: "847-555-6621",
    email: "biverson@realfakedoors.com",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("ascending");

  return (
    <div className="body">
      <div className="jumbotron jumbotron-fluid text-center header" style={{marginBottom: 0}}>
        <h1>Real Fake Doors Employee Directory</h1>
        <form className="search-div">
          <div className="search form-group form-inline d-flex justify-content-center">
            <label htmlFor="search">Search Name:</label>
            <input
              id="search"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Frank Elliot"
            />
          </div>
          <div className="sort form-group form-inline d-flex justify-content-center">
            <label>Sort Name:</label>
            <label className="radio-inline">
              <input
                type="radio"
                name="sort"
                value="asc"
                checked={sort === "asc"}
                onChange={(event) => setSort(event.target.value)}
              />
              Ascending
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="sort"
                value="desc"
                checked={sort === "desc"}
                onChange={(event) => setSort(event.target.value)}
              />
              Descending
            </label>
          </div>
        </form>
      </div>

      <Card employees={employees} search={search} sort={sort} />
    </div>
  );
}

export default App;
