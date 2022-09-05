import "./App.css";
import InputScreen from "./components/InputScreen/InputScreen";
import OutputScreen from "./components/OutputScreen/OutputScreen";
import Home from "./components/Home/Home";
import BEvsRTBR from "./components/InputScreen/BEvsRTBR/BEvsRTBR";
import Summary from "./components/InputScreen/Summary/Summary";
import Voltrend from "./components/InputScreen/Voltrend/Voltrend";
import BEtrend from "./components/InputScreen/BEtrend/BEtrend";
import Modify from "./components/InputScreen/BEvsRTBR/Modify";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Addacount from "./components/Home/Addacount";
import MultipleTabs from "./components/OutputScreen/MultipleTabs";
import Nav from "./components/Navigation/Nav";


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
