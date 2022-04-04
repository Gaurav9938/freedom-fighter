import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import State from "./component/State";
import FreedomFighter from "./component/FreedomFighter";
import app from "./component/firebase/Config";
import Add from "./component/Add";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/state" element={<State />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/state/:state" element={<FreedomFighter />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
