import React from "react"
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";

import Layout from "../components/Layout";
import Scene from "../components/Scene";
import Scene2 from "../components/Scene2";
import { Link } from "gatsby";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
   <div className="full-width-image margin-top-0">
   <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Suspense fallback={null}>
              <Scene position={[0, 0, 0]}/>
              
                  {/* <Box position={[0, 0, 0]} /> */}

           </Suspense>
      </Canvas>
    </div>
    <section className="section section--gradient">
      <div className="container">
          <div className="columns">
            <div className="column is-one-quarter is-offset-1 ">
              <h1 className="is-size-1 has-text-right	has-text-weight-normal">{mainpitch.title}</h1>
              <h3 className="has-text-weight-light is-size-5 has-text-right" >{heading}</h3>
            </div>
           <div className="column is-third is-offset-1">
             <br></br>
             <p className="has-text-weight-light">{mainpitch.description}</p>
             <br></br>
             <p className="has-text-weight-light">{description}</p>
             <br></br>
             <div className = "content"> 
              <Link to="/exhibition">
              enter exhibit→
              </Link>
          </div>
           </div>
{/* <div className="column is-one-quarter is-offset-1 ">
</div> */}
          </div>
      </div>
    </section>

    <div className="full-width-image margin-top-0">
   <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Suspense fallback={null}>
              <Scene2 position={[0, 0, 0]}/>
              
                  {/* <Box position={[0, 0, 0]} /> */}

           </Suspense>
      </Canvas>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
