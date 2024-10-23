import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./Counter";
import { Route, Routes } from "react-router-dom";
import UserDetail from "./todoComponents/UserDetail";
import Nav from "./Nav";
import AddUser from "./todoComponents/AddUser";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/userDetail" element={<UserDetail />} />
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path="/addUser/:index" element={<AddUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
