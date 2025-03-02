import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard";
import GoogleLoginButton from "./components/GoogleLoginButton";
import GithubLoginButton from "./components/authButtons/GithubLoginButton";
import Jobseekers from "./components/jobseekersPage/Jobseekers";

function App() {
  return (
    <>
      {/* <div className="font-[Ubuntu]"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<><GoogleLoginButton /><GithubLoginButton /></>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobseekers" element={<Jobseekers />} />
      </Routes>
      {/* </div> */}
    </>
  );
}

export default App;
