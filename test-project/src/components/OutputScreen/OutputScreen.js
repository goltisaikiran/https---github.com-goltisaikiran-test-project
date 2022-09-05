import React from 'react'
import { Link,Outlet} from 'react-router-dom';

function OutputScreen() {
  return (
   <>
       <nav className="subnav">
         <Link className="navi" to="Multipletabs">Multiple Tabs</Link>
       </nav>
       <Outlet/>
   </>
  )
}

export default OutputScreen