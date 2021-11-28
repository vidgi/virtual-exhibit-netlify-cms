import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const EssayPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div class="essay-bg-img">
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
        <div className="column is-one-quarter is-offset-1">
          </div>
          <div className="column is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-semibold">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

EssayPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const EssayPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <EssayPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

EssayPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EssayPage;

export const essayPageQuery = graphql`
  query EssayPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
