import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import "@google/model-viewer/dist/model-viewer";

// eslint-disable-next-line
export const SpeciationPageTemplate = ({ title, artist, statement, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <h3 className="title is-size-4">
                {artist}
              </h3>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div id="card">
      {(typeof window !== 'undefined') ? (
          <model-viewer
          src="/speciation-models/Model_01.glb"
          ios-src=""
          alt="Model 1"
          shadow-intensity="1"
          camera-controls
          auto-rotate
          ar
        ></model-viewer>
      ) : null}
     
    </div>
    <div id="card">
      {(typeof window !== 'undefined') ? (
          <model-viewer
          src="/speciation-models/Model_02.glb"
          ios-src=""
          alt="Model 2"
          shadow-intensity="1"
          camera-controls
          auto-rotate
          ar
        ></model-viewer>
      ) : null}
     
    </div>
    <div id="card">
      {(typeof window !== 'undefined') ? (
          <model-viewer
          src="/speciation-models/Model_03.glb"
          ios-src=""
          alt="Model 3"
          shadow-intensity="1"
          camera-controls
          auto-rotate
          ar
        ></model-viewer>
      ) : null}
     
    </div>
      </div>
      <div className="container">
      <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
         <h2 className="title is-size-4 has-text-weight-bold is-bold-light">
                artist statement
              </h2>  
              <div className = "content"> 
              {statement}
              </div>
              <h2 className="title is-size-4 has-text-weight-bold is-bold-light">
                artist biography
              </h2>   
              <PageContent className="content" content={content} />
</div>
</div>
</div>
      </div>
    </section>
  );
};

SpeciationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  statement: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const SpeciationPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SpeciationPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        artist={post.frontmatter.artist}
        statement={post.frontmatter.statement}
        content={post.html}
      />
    </Layout>
  );
};

SpeciationPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SpeciationPage;

export const aboutPageQuery = graphql`
  query SpeciationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        artist
        statement
      }
    }
  }
`;
