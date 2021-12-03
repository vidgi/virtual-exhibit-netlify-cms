import React from "react";
import { Link } from "gatsby";

export default function Sidebar(props) {
  const backlink = props.backlink

    return (
          <div>
            <br></br>
            <Link className="mobile-sidebar-item" to={backlink}>
            <small><small>← Return to</small></small>
              Exhibit Overview
              </Link>
              <Link className="sidebar-item" to={backlink}>
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
              Arcadia Inc.
              <small><small>Cezar Mocan</small></small>
              </Link>
              <Link className="sidebar-item" to="/pac-tracer">
              Pac Tracer
              <small><small>Andy Wallace</small></small>
              </Link>
            
        </div>
    )
}