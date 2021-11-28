import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Sidebar from '../components/Sidebar'

// eslint-disable-next-line
export const ExhibitionPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="exhibition-sidebar">
              <h2 className="title is-size-3 has-text-weight-semibold">
                {title}
              </h2>
        <Sidebar />
            </div>
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
