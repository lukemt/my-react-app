import "./Header.css";
import logo from "./HeaderLogo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} />
    </header>
  );
}

export default Header;
