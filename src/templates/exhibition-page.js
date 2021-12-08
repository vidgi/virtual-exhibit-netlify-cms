import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import App from '../components/App'
import { Helmet } from 'react-helmet'

// eslint-disable-next-line
export const ExhibitionPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
   
    <section className="section section--gradient">
      <Helmet title= "Exhibition | Sculpted in Our Image, Forged in Our Minds"/>      
      <div className="container hide-scrollbar">
        <div className="columns">
          <div className="column" style={{height: "90vh"}}>
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
