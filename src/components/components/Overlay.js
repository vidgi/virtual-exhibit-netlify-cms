import React, { forwardRef } from 'react';
import { Link } from "gatsby";
import work1 from './work-01.png'; // with import
import work2 from './work-02.png'; // with import
import work3 from './work-03.png'; // with import
import work4 from './work-04.png'; // with import
import work5 from './work-05.png'; // with import



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
            let grad = ((progress * 100) / 1.265).toFixed(0)
            // caption.current.innerText = `${Math.abs(grad)}%`
        }}
        className="scroll">

        <div className="exhibitiontitle">
         < h2 className="title is-size-3 has-text-weight-semibold">
                Exhibition
              </h2>
         </div>    

        <div className="slide" style={{width: "45vw"}} id="zoom-princess">
            <Link className="exhibit-item" to="/zoom-princess">
                Zoom Princess →
                <small><small>Sarah Boo</small></small>
                <br></br>
             <img src={work1} />
            </Link>
        </div>



        <div className="slide" style={{width: "45vw"}} id="speciation">
            <Link className="exhibit-item" to="/speciation">
              Speciation →
              <small><small>Mads Brimble</small></small>
              <br></br>
             <img src={work2} />
             </Link>
        </div>

        <div className="slide" style={{width: "45vw"}} id="antechamber">
            <Link className="exhibit-item" to="/antechamber">
              Antechamber →
              <small><small>Benjamin Chang</small></small>
              <br></br>
             <img src={work3} />
            </Link>
        </div>
        <div className="slide" style={{width: "45vw"}} id="arcadia-inc">
            <Link className="exhibit-item" to="/arcadia-inc">
              Arcadia Inc. →
              <small><small>Cezar Mocan</small></small>
              <br></br>
             <img src={work4} />
            </Link>
        </div>
        <div className="slide" style={{width: "45vw"}} id="pac-tracer">
            <Link className="exhibit-item" to="/pac-tracer">
              Pac Tracer →
              <small><small>Andy Wallace</small></small>
              <br></br>
             <img src={work5} />
            </Link>
        </div>

          
  

        {/* <span className="caption" ref={caption}>
            0°
        </span> */}
    <span className="helper" ref={caption}>
    ↓
        </span>
    </div>
))

export default Overlay;