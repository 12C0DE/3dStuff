import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Scene1 } from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scene1" element={<Scene1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
