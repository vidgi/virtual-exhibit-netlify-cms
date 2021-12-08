import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Helmet } from 'react-helmet'

// eslint-disable-next-line
export const EssayPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div class="essay-bg-img">
    <Helmet title= "Exhibition Essay | Sculpted in Our Image, Forged in Our Minds"/>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
        <div className="column is-one-quarter ">
          </div>
          <div className="column is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-semibold">
                {title}
              </h2>
              <small>
              <PageContent className="content" content={content} />
              </small>
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
