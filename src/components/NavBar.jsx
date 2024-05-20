import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "../assets/logox.png";

const NavBar = () => {
  const setActiveClass = ({ isActive }) =>
    isActive ? "nav-link active text-white fs-5" : "nav-link fs-6";
  return (
    <Navbar className="bg-black p-1" style={{ height: "60px" }}>
      <Container>
        <Navbar.Brand to="/" className="d-flex align-items-center">
          <img
            src={Image}
            alt="pokemon"
            style={{ height: "95px", marginTop: "9px", marginRight: "10px" }}
          />
          <span className="text-warning">Pokedex</span>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <NavLink
            className={setActiveClass}
            to="/"
            style={{ color: "yellow" }}
          >
            Home
          </NavLink>
          <NavLink
            className={setActiveClass}
            to="/Pokemones"
            style={{ color: "yellow" }}
          >
            Pokemones
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
