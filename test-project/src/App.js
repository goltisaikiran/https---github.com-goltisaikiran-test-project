import "./App.css";
import InputScreen from "./components/InputScreen";
import OutputScreen from "./components/OutputScreen";
import Home from "./components/Home";
import BEvsRTBR from "./components/BEvsRTBR";
import Summary from "./components/Summary";
import Voltrend from "./components/Voltrend";
import BEtrend from "./components/BEtrend";
import Modify from "./components/Modify";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Addacount from "./components/Addacount";
import MultipleTabs from "./components/MultipleTabs";
import Nav from "./components/Nav";


function App() {
  return (
    <>
     <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Home/Addacount" element={<Addacount />} />
        <Route path="inputScreen" element={<InputScreen />}>
          <Route path="Summary" element={<Summary />} />
          <Route path="BEtrend" element={<BEtrend />} />
          <Route path="Voltrend" element={<Voltrend />} />
          <Route path="BEvsRTBR" element={<BEvsRTBR />} />
          - <Route path="BEvsRTBR/Modify/:id" element={<Modify />} />
        </Route>
        <Route path="outputScreen" element={<OutputScreen />}>
          <Route path="MultipleTabs" element={<MultipleTabs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
