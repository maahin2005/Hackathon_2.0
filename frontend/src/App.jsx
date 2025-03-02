import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard";
import GoogleLoginButton from "./components/GoogleLoginButton";
import GithubLoginButton from "./components/authButtons/GithubLoginButton";
import Jobseekers from "./components/jobseekersPage/Jobseekers";
import EmployeeProfile from "./Pages/Singleemployee/SingleEmplee";

const sampleEmployee = {
  name: "John Doe",
  email: "john.doe@example.com",
  githubUsername: "akmurmu82",
  profileImage: "https://avatars.githubusercontent.com/u/195257667?v=4",
  role: "Job Seeker",
  score: 85,
  topRepos: [
    {
      name: "React Portfolio",
      description: "A sleek and modern React portfolio template.",
      html_url: "https://github.com/johndoe/react-portfolio",
    },
    {
      name: "Node API",
      description: "REST API built with Node.js and Express.",
      html_url: "https://github.com/johndoe/node-api",
    },
  ],
  createdAt: "2025-03-02T10:20:10.835Z",
  updatedAt: "2025-03-02T12:45:30.835Z",
};

function App() {
  return (
    <>
      <div className="font-[Ubuntu]">
        <Routings />
      </div>
    </>
  );
}

export default App;
