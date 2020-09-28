import PropTypes from "prop-types";
import Link from "next/link";

const Menu = (props) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link href="/">
            <a>
              <span onClick={props.onToggleMenu}>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <a>
              <span onClick={props.onToggleMenu}>About</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#client">
            <a>
              <span onClick={props.onToggleMenu}>Clients</span>
            </a>
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a href="#contact" className="button special fit">
            contact
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu}>
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Menu;
