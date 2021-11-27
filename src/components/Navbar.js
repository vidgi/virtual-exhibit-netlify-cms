import React from "react";
import { Link } from "gatsby";
import interaccess from "../img/interaccess-icon-white.png";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link> */}
            <Link className="navbar-item" to="/">
              <b>Sculpted in Our Image, Forged in Our Minds</b>
              </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            
            <div className="navbar-start has-text-centered">
            {/* <Link className="navbar-item" to="/exhibition">
              exhibition
              </Link>
              <Link className="navbar-item" to="/about">
                about
              </Link>
              <Link className="navbar-item" to="/events">
                events
              </Link> */}

            </div>
            <div className="navbar-end has-text-centered">
{/*              
              <Link className="navbar-item" to="/zoom-princess">
              Zoom Princess
              </Link>
              <Link className="navbar-item" to="/speciation">
              Speciation
              </Link>
              <Link className="navbar-item" to="/antechamber">
              Antechamber
              </Link>
              <Link className="navbar-item" to="/arcadia-inc">
              Arcadia Inc
              </Link>
              <Link className="navbar-item" to="/pac-tracer">
              Pac Tracer
              </Link> */}





                  <Link className="navbar-item" to="/exhibition">
              exhibition
              </Link>
              <Link className="navbar-item" to="/about">
                about
              </Link>
              <Link className="navbar-item" to="/essay">
                essay
              </Link>
              <Link className="navbar-item" to="/events">
                events
              </Link>

              <a
                className="navbar-item"
                href="https://interaccess.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={interaccess} alt="interaccess" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
