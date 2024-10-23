import React from "react";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import { useCounter } from "../store/ReducerStore";

function UserDetail() {
  const { details, dispatchDetails } = useCounter();

function removeData(index){
  dispatchDetails({
    type :"REMOVE",
    payload:index
  })
}

  return (
    <div className="container">
      <div className="mt-3 text-end">
        <NavLink to="/addUser" className="btn btn-primary">
          Add User
        </NavLink>
      </div>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {details.length > 0 &&
            details.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.fName}</td>
                  <td>{item.lName}</td>
                  <td>{item.uName}</td>
                  <th>
                    <NavLink to={`/addUser/${index}`} className="btn btn-warning">Update</NavLink>{" "}
                    <button onClick={()=>removeData(index)} className="btn btn-danger">Delete</button>
                  </th>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default UserDetail;
