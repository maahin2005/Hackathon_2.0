import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <>
      {/* <div className="font-[Ubuntu]"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* </div> */}
    </>
  );
}

export default App;
