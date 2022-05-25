import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby";
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";

import Scene3 from "../components/Scene3";

const allParams = {
  "Performances": {color: "#e7ff33", timedelay:0, rotation:[ -0.25, 0.5, -0.15],position:[ 0.25, 0, 0], scale:[0.5, 0.5, 0.5]},
  "Curator Talk": {color: "#3dffff", timedelay:50, rotation:[ 0.5, 0.25, 0.05],position:[ -0.25, 0, 0], scale:[0.5, 0.5, 0.5]},
  "Screening + Discussion": {color: "#abff7a", timedelay:-20, rotation:[ 0.65, 0.3, 0.35],position:[ 0.25, 0, 0], scale:[0.5, 0.5, 0.5]}
}

const Events = ({ data }) => (
  <div className="columns">
    {data.map((price) => (
      <div key={price.subtitle} className="column">
        <section className="section">
        {/* <div style={{ position: "relative", width: 250, height: 300 }}>
        <Canvas dpr={[1,2]}>
          <ambientLight />
           <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
             <Scene3 params = {allParams[price.subtitle]}/>
            </Suspense>
        </Canvas>
        </div> */}
          <h4 className="is-size-4 has-text-right	has-text-weight-semibold">
            {price.subtitle}
          </h4>     
          <p className="has-text-right has-text-weight-normal">{price.title}</p>
          <ul>
            {price.dates.map((item) => (
              <li key={item} className="is-size-8 has-text-weight-normal">
                {item}
              </li>
            ))}
          </ul>


          <div className = "content"> 
              <Link to={price.link}>
              {price.location}→
              </Link>
          </div>
        </section>
      </div>
    ))}
  </div>
)

Events.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      dates: PropTypes.array,
      location: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

export default Events
