import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Link } from "gatsby";
import Sidebar from '../components/Sidebar'
import { Helmet } from 'react-helmet'

// eslint-disable-next-line
export const ZoomPrincessPageTemplate = ({ title, artist, statement, bio, link1title, link1link, link2title, link2link, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <Helmet title= "Zoom Princess | Sculpted in Our Image, Forged in Our Minds"/>
      <div className="container">
        <div className="columns">
        <div className="column is-one-quarter">
        <Sidebar backlink="/exhibition#zoom-princess" />
        </div>
          <div className="column">
            <div className="section">
              <h2 className="title is-size-2 has-text-weight-semibold">
                {title}
              </h2>
              <h3 className="title is-size-4 has-text-weight-normal">
                {artist}
              </h3>
              <PageContent className="content" content={content} />
              <h2 className="title is-size-4 has-text-weight-semibold">
                artist statement
              </h2>  
              <div className = "content"> 
              {statement}
              </div>
              <h2 className="title is-size-4 has-text-weight-semibold">
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

ZoomPrincessPageTemplate.propTypes = {
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

const ZoomPrincessPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ZoomPrincessPageTemplate
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

ZoomPrincessPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ZoomPrincessPage;

export const aboutPageQuery = graphql`
  query ZoomPrincessPage($id: String!) {
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
