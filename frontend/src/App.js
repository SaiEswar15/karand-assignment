import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Signup/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/dashboard" exact element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

