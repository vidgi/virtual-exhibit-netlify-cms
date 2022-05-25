import React from "react"
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";

import Layout from "../components/Layout";
import Scene from "../components/Scene";
import Scene2 from "../components/Scene2";
import { Link } from "gatsby";
import { Helmet } from 'react-helmet'

export const IndexPageTemplate = ({
  title,
  date,
  description1,
  description2,
}) => (
  <div>
    <Helmet title= "Sculpted in Our Image, Forged in Our Minds"/>
    <div style={{ position: "relative", height: 250 }} className="full-width-image margin-top-0">
   <Canvas dpr={[1, 2]}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Suspense fallback={null}>
    <Scene position={[0, 0, 0]}/>
    </Suspense>
    </Canvas >
    </div>
    <section className="section section--gradient">
      <div className="container">
          <div className="columns">
            <div className="column is-one-quarter is-offset-1 ">
              <h1 className="is-size-1 has-text-right	has-text-weight-normal">{title}</h1>
              <h3 className="has-text-weight-light is-size-5 has-text-right" >{date}</h3>
            </div>
           <div className="column is-third is-offset-1">
             <br></br>
             <div className = "is-size-3 content has-text-weight-normal"> 
             This exhibition has closed, however, other events and exhibitions are available and upcoming at InterAccess. 
             </div>
             <br></br>
             <div className = "is-size-4 content has-text-weight-normal"> 
             <Link to="https://interaccess.org/">
               INTERACCESS→
              </Link>
              <br></br>
              <Link to="https://interaccess.org/exhibition/sculpted-our-image-forged-our-minds">
               EXHIBIT INFORMATION→
              </Link>
          </div>
           </div>
{/* <div className="column is-one-quarter is-offset-1 ">
</div> */}
          </div>
      </div>
    </section>

    <div style={{ position: "relative", height: 250 }} className="full-width-image margin-top-0">
    <Canvas dpr={[1, 2]}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Scene2 position={[0, 0, 0]}/>
      </Suspense>
    </Canvas>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description1: PropTypes.string,
  description2: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        date={frontmatter.date}
        description1={frontmatter.description1}
        description2={frontmatter.description2}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        date
        description1
        description2
      }
    }
  }
`;
