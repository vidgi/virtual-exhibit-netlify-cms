import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Link } from "gatsby";

// eslint-disable-next-line
export const AntechamberPageTemplate = ({ title, artist, statement, bio, link1title, link1link, link2title, link2link, content, contentComponent }) => {
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
              <PageContent className="content" content={content} />
              <h2 className="title is-size-4 has-text-weight-bold is-bold-light">
                artist statement
              </h2>  
              <div className = "content"> 
              {statement}
              </div>
              <h2 className="title is-size-4 has-text-weight-bold is-bold-light">
                artist biography
              </h2>   
              <div className = "content"> 
              {bio}
              </div>

              <div className = "content"> 
              <Link to={link1link}>
              {link1title}
              </Link>
              </div>

              <div className = "content"> 
              <Link to={link2link}>
              {link2title}
              </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AntechamberPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  statement: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  link1title: PropTypes.string.isRequired,
  link1link: PropTypes.string.isRequired,
  link2title: PropTypes.string.isRequired,
  link2link: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AntechamberPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AntechamberPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        artist={post.frontmatter.artist}
        statement={post.frontmatter.statement}
        bio={post.frontmatter.bio}
        link1title={post.frontmatter.link1title}
        link1link={post.frontmatter.link1link}
        link2title={post.frontmatter.link2title}
        link2link={post.frontmatter.link2link}
        content={post.html}
      />
    </Layout>
  );
};

AntechamberPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AntechamberPage;

export const aboutPageQuery = graphql`
  query AntechamberPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        artist
        statement
        bio
        link1title
        link1link
        link2title
        link2link
      }
    }
  }
`;
