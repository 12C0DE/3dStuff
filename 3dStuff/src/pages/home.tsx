import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>

      <h2>Look at:</h2>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button onClick={() => navigate("/")}>/</button>
        <button onClick={() => navigate("/scene1")}>Cubes</button>
        <button onClick={() => navigate("/animate1")}>Animated Shape</button>
        <button onClick={() => navigate("/sphere")}>Sphere</button>
        <button onClick={() => navigate("/torus")}>Torus</button>
        <button onClick={() => navigate("/torusKnot")}>Torus Knot</button>
        <button onClick={() => navigate("/interact")}>Interact Sphere</button>
        <button onClick={() => navigate("/intTorusKnot")}>
          Interactive Torus Knot w Leva
        </button>
        <button onClick={() => navigate("/wobbleTorusKnot")}>
          Wobble Torus Knot
        </button>
      </div>
    </div>
  );
};
