import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Link } from "gatsby";
import Sidebar from '../components/Sidebar'
import Gallery from 'react-grid-gallery';
import { Helmet } from 'react-helmet'

// eslint-disable-next-line
export const SpeciationPageTemplate = ({ title, artist, statement, bio, link1title, link1link, link2title, link2link, content, contentComponent  }) => {
  const PageContent = contentComponent || Content;
  const data = [
    {
      src: "https://vidgi.github.io/antechamber/renders/IA_Render_01_01.png",
      thumbnail: "https://vidgi.github.io/antechamber/renders/IA_Render_01_01.png",
      caption: "Render of Organism_01",
      width: 4,
      height: 3
    },
    {
      src: "https://vidgi.github.io/antechamber/renders/IA_Render_01_02.png",
      thumbnail: "https://vidgi.github.io/antechamber/renders/IA_Render_01_02.png",
      caption: "Render of Organism_01",
      width: 4,
      height: 3
    },
    {
      src: "https://vidgi.github.io/antechamber/renders/IA_Render_01_03.png",
      thumbnail: "https://vidgi.github.io/antechamber/renders/IA_Render_01_03.png",
      caption: "Render of Organism_01",
      width: 4,
      height: 3
    },
    {
      src: "https://vidgi.github.io/antechamber/renders/IA_Render_02_01.png",
      thumbnail: "https://vidgi.github.io/antechamber/renders/IA_Render_02_01.png",
      caption: "Render of Organism_02",
      width: 4,
      height: 3
    },
    {
      src: "https://vidgi.github.io/antechamber/renders/IA_Render_02_02.png",
      thumbnail: "https://vidgi.github.io/antechamber/renders/IA_Render_02_02.png",
      caption: "Render of Organism_02",
      width: 4,
      height: 3
    },
    {
      src: "https://vidgi.github.io/antechamber/renders/IA_Render_02_03.png",
      thumbnail: "https://vidgi.github.io/antechamber/renders/IA_Render_02_03.png",
      caption: "Render of Organism_02",
      width: 4,
      height: 3
    },
    {
      src: "https://vidgi.github.io/antechamber/renders/IA_Render_03_01.png",
      thumbnail: "https://vidgi.github.io/antechamber/renders/IA_Render_03_01.png",
      caption: "Render of Organism_03",
      width: 4,
      height: 3
    },
    {
      src: "https://vidgi.github.io/antechamber/renders/IA_Render_03_02.png",
      thumbnail: "https://vidgi.github.io/antechamber/renders/IA_Render_03_02.png",
      caption: "Render of Organism_03",
      width: 4,
      height: 3
    },
    {
      src: "https://vidgi.github.io/antechamber/renders/IA_Render_03_03.png",
      thumbnail: "https://vidgi.github.io/antechamber/renders/IA_Render_03_03.png",
      caption: "Render of Organism_03",
      width: 4,
      height: 3
    }
  ]


  return (
    <section className="section section--gradient">
      <Helmet title= "Speciation | Sculpted in Our Image, Forged in Our Minds"/>
      <div className="container">
        <div className="columns">
        <div className="column is-one-quarter">
        <Sidebar backlink="/exhibition#speciation" />
        </div>
          <div className="column">
            <div className="section">
              <h2 className="title is-size-2 has-text-weight-semibold">
                {title}
              </h2>
              <h3 className="title is-size-4 has-text-weight-normal">
                {artist}
              </h3>

<div className = "content">
              <div style={{
                    justify: "center",
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "auto"}}>
                <Gallery
            images={data}
            enableLightbox={true}
            enableImageSelection={false}
            rowHeight={275}
            margin={10}/>
                </div>
</div>

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

SpeciationPageTemplate.propTypes = {
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

const SpeciationPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SpeciationPageTemplate
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
        bio
        link1title
        link1link
        link2title
        link2link
      }
    }
  }
`;
