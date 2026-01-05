import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link>
    </header>
  );
};
