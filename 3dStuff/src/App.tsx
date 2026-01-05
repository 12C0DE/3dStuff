import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimateShape, Home, Scene1 } from "./pages/index";
import { Header } from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scene1" element={<Scene1 />} />
          <Route path="/animate1" element={<AnimateShape />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
