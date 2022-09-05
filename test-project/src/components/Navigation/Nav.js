import React from 'react'
import {  NavLink } from "react-router-dom";
function Nav() {
  return (
  <>
    <div className="titlebar">
        <NavLink className="nav" to="Home">
           HiTech
        </NavLink>
        <div className="title">Financial Demo</div>
    </div>
    <div className="mainNav">
        <NavLink className="nav" to="Home"> Home</NavLink>
        <NavLink className="nav" to="inputScreen">InputScreen</NavLink>
        <NavLink className="nav" to="outputScreen">OutputScreen</NavLink>
    </div>
  </>
  )
}

export default Nav