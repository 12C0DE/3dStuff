import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>

      <h2>Look at:</h2>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => navigate("/")}>/</button>
        <button onClick={() => navigate("/scene1")}>Cubes</button>
        <button onClick={() => navigate("/animate1")}>Animated Shape</button>
        <button onClick={() => navigate("/sphere")}>Sphere</button>
        <button onClick={() => navigate("/torus")}>Torus</button>
        <button onClick={() => navigate("/torusKnot")}>Torus Knot</button>
        <button onClick={() => navigate("/interact")}>Interact</button>
      </div>
    </div>
  );
};
