import React from "react";
import "./style.css";
import Cart from './components/Cart';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Shop from './components/Shop';
import NavBar from './components/NavBar';
import firebase from  './firebase';

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
    </div>
  );
}
