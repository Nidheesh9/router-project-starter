import "./App.css";
import {Route,Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import Dashboard from "./Components/Dashboard"
import Home from "./Components/Home"
import PrivateRoute from "./Components/PrivateRoute"
import { useState } from "react";




function App() {

  const [isloggedIn,setIsloggedIn]=useState(false);

  return(
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">

      <Navbar isloggedIn={isloggedIn} setIsloggedIn={setIsloggedIn} />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsloggedIn={setIsloggedIn}/>}/>
        <Route path="/signup" element={<SignUp setIsloggedIn={setIsloggedIn}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute isloggedIn={isloggedIn}>
              <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
