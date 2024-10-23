import React, { useEffect, useState } from "react";
import { useCounter } from "../store/ReducerStore";
import { useNavigate, useParams } from "react-router-dom";

function AddUser() {
  const [data, setData] = useState({
    fName: "",
    lName: "",
    uName: "",
  });

  const { details, dispatchDetails } = useCounter();

  const navigate = useNavigate();

  const { index } = useParams();
  useEffect(() => {
    if (index !== undefined) {
      const userToEdit = details[index];
      setData(userToEdit);
    }
  }, [index, details]);

  function handleOnChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSumbit(e) {
    e.preventDefault();
    if (index !== undefined) {
      dispatchDetails({
        type: "UPDATE",
        payload: { index: Number(index), data },
      });
    } else {
      dispatchDetails({
        type: "ADDUSER",
        payload: data,
      });
    }
    navigate("/userDetail");
    setData({
      fName: "",
      lName: "",
      uName: "",
    });
  }

  return (
    <div className="container">
      <form className="mt-4" onSubmit={handleSumbit}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          className="p-2 w-100 bg_input mt-2"
          id="firstName"
          type="text"
          placeholder="First Name"
          value={data.fName}
          onChange={handleOnChange}
          name="fName"
        />
        <label className="mt-3" htmlFor="lastName">
          Last Name
        </label>
        <br />
        <input
          className="p-2 w-100 bg_input mt-2"
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={data.lName}
          onChange={handleOnChange}
          name="lName"
        />
        <label className="mt-3" htmlFor="userName">
          User Name
        </label>
        <br />
        <input
          className="p-2 w-100 bg_input mt-2"
          id="userName"
          type="text"
          placeholder="User Name"
          value={data.uName}
          onChange={handleOnChange}
          name="uName"
        />
        <button className="btn btn-secondary mt-2" type="submit">
          Save Data
        </button>
      </form>
    </div>
  );
}

export default AddUser;
