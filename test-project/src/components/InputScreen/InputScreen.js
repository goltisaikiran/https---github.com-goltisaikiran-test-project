import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';

function InputScreen() {
  return (<>
    <nav className="subnav">
         <NavLink className="navi" to="Summary">Summary</NavLink>
         <NavLink className="navi" to="BEtrend">BE Trend</NavLink>
         <NavLink className="navi" to="Voltrend">VolTrend</NavLink>
         <NavLink className="navi" to="BEvsRTBR">BEvsRTBR</NavLink>
     
    </nav>
    <Outlet/>
   
   
    </>
  )
}

export default InputScreen