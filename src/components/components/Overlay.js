import React, { forwardRef } from 'react';
import { Link } from "gatsby";

const Overlay = forwardRef(({ caption, scroll }, ref) => (
    <div
        ref={ref}
        onScroll={(e) => {
            // if (window.innerWidth > 800) {
                scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
            // } else {
                // scroll.current = -e.target.scrollLeft / (e.target.scrollWidth - window.innerWidth)   
            // }
            let progress = scroll.current.toFixed(2)
            let grad = ((progress * 360) / 1).toFixed(0)
            caption.current.innerText = `${Math.abs(grad)}°`
        }}
        className="scroll">
        <div className="slide" style={{width: 360}}>
            <Link className="sidebar-item" to="/zoom-princess">
                Zoom Princess →
                <small><small>Sarah Boo</small></small>
            </Link>
        </div>
        <div className="slide" style={{width: 360}}>
            <Link className="sidebar-item" to="/speciation">
              Speciation →
              <small><small>Mads Brimble</small></small>
             </Link>
        </div>
        <div className="slide" style={{width: 360}}>
            <Link className="sidebar-item" to="/antechamber">
              Antechamber →
              <small><small>Benjamin Chang</small></small>
            </Link>
        </div>
        <div className="slide" style={{width: 360}}>
            <Link className="sidebar-item" to="/arcadia-inc">
              Arcadia Inc →
              <small><small>Cezar Mocan</small></small>
            </Link>
        </div>
        <div className="slide" style={{width: 360}}>
            <Link className="sidebar-item" to="/pac-tracer">
              Pac Tracer →
              <small><small>Andy Wallace</small></small>
            </Link>
        </div>
        {/* <span className="caption" ref={caption}>
            0°
        </span> */}
   
    </div>
))

export default Overlay;