import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

function Logout() {

  const navigate = useNavigate();

  useEffect(() => {

    localStorage.setItem("userName", "");

    navigate('/Login', { replace: true });

    //if (!localStorage.getItem("userName")) {
    //  navigate('/Login', { replace: true });
    //}

  }, [])

  return (
    <></>
  );
}

export default Logout;