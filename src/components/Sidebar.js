import React from "react";
import { Link } from "gatsby";

const Sidebar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  render() {
    return (
          <div>
            <Link className="navbar-item" to="/exhibition">
              Exhibit Overview
              <br></br>
              View all works
              </Link>
              <Link className="navbar-item" to="/zoom-princess">
              Zoom Princess
              <br></br>
              Sarah Boo
              </Link>
              <Link className="navbar-item" to="/speciation">
              Speciation
              <br></br>
              Mads Brimble
              </Link>
              <Link className="navbar-item" to="/antechamber">
              Antechamber
              <br></br>
              Benjamin Chang
              </Link>
              <Link className="navbar-item" to="/arcadia-inc">
              Arcadia Inc
              <br></br>
              Cezar Mocan
              </Link>
              <Link className="navbar-item" to="/pac-tracer">
              Pac Tracer
              <br></br>
              Andy Wallace
              </Link>
            
        </div>
    );
  }
};

export default Sidebar;
