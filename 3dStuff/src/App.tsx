import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimateShape, InteractPage, Home, Scene1, SpherePage, TorusPage, TorusKnotPage } from "./pages/index";
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
          <Route path="/sphere" element={<SpherePage />} />
          <Route path="/torus" element={<TorusPage />} />
          <Route path="/torusKnot" element={<TorusKnotPage />} />
          <Route path="/interact" element={<InteractPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
