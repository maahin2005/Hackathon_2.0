import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard";
import GoogleLoginButton from "./components/GoogleLoginButton";
import GithubLoginButton from "./components/authButtons/GithubLoginButton";

function App() {
  return (
    <>
      {/* <div className="font-[Ubuntu]"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<><GoogleLoginButton /><GithubLoginButton /></>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* </div> */}
    </>
  );
}

export default App;
