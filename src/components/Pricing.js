import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby";

const Pricing = ({ data }) => (
  <div className="columns">
    {data.map((price) => (
      <div key={price.plan} className="column">
        <section className="section">
          <h4 className="is-size-4 has-text-right	has-text-weight-normal">
            {price.plan}
          </h4>     
          <p className="has-text-right has-text-weight-normal">{price.description}</p>
          <ul>
            {price.items.map((item) => (
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

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      location: PropTypes.string,
      link: PropTypes.string,
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
