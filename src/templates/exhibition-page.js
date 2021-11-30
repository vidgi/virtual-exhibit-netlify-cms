import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Sidebar from '../components/Sidebar'
import App from '../components/App'
import ProgressBar from 'react-progressbar-on-scroll';

// eslint-disable-next-line
export const ExhibitionPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
   
    <section className="section section--gradient">
      
      <ProgressBar
      color="pink"
      gradient={true}
      colorGradient="yellow"
      height={5}
    />
      <div className="container">
        <div className="columns">
          <div className="column" style={{height: 500}}>

         < h2 className="title is-size-3 has-text-weight-semibold">
                {title}
              </h2>
              {/* <div className="column" style={{width: 500, height: '100%'}}> */}
             
<App />
</div>
        </div>
      </div>
    </section>
  );
};

ExhibitionPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ExhibitionPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ExhibitionPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ExhibitionPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ExhibitionPage;

export const exhibitionPageQuery = graphql`
  query ExhibitionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
