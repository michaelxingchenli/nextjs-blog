import PropTypes from "prop-types";
import Link from "next/link";

const Header = (props) => (
  <header id="header" className="alt">
    <Link href="/">
      <a className="logo">
        <strong>
          <span style={{ color: "#b0676b" }}>S</span>F
        </strong>{" "}
        design & development
      </a>
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu}>
        Menu
      </a>
    </nav>
  </header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Header;
