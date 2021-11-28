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
            <Link className="mobile-sidebar-item" to="/exhibition">
            <small><small>← Return to</small></small>
              Exhibit Overview
              </Link>
              <Link className="sidebar-item" to="/exhibition">
            <small><small>← Return to</small></small>
              Exhibit Overview
              </Link>
              <Link className="sidebar-item" to="/zoom-princess">
              Zoom Princess
              <small><small>Sarah Boo</small></small>
              </Link>
              <Link className="sidebar-item" to="/speciation">
              Speciation
              <small><small>Mads Brimble</small></small>
              </Link>
              <Link className="sidebar-item" to="/antechamber">
              Antechamber
              <small><small>Benjamin Chang</small></small>
              </Link>
              <Link className="sidebar-item" to="/arcadia-inc">
              Arcadia Inc
              <small><small>Cezar Mocan</small></small>
              </Link>
              <Link className="sidebar-item" to="/pac-tracer">
              Pac Tracer
              <small><small>Andy Wallace</small></small>
              </Link>
            
        </div>
    );
  }
};

export default Sidebar;
