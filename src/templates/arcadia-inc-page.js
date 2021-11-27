import React,{useState,useEffect, useCallback} from 'react';
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Link } from "gatsby";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

// eslint-disable-next-line
export const ArcadiaIncPageTemplate = ({ title, artist, statement, bio, link1title, link1link, link2title, link2link, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('photo-index.json')
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        var array = [];
        for (var key in myJson) {
          if (myJson.hasOwnProperty(key)) {
              console.log(myJson[key].src);
              var object = {
                src: myJson[key].src,
                width: 4,
                height: 3
              };
              array.push(object);
          }
      }
      console.log(array);
      setData(array);
        
      });
  }
  useEffect(()=>{
    getData()
  },[])

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

              <div>
<Gallery photos={data} onClick={openLightbox} />
     <ModalGateway>
       {viewerIsOpen ? (
         <Modal onClose={closeLightbox}>
           <Carousel
             currentIndex={currentImage}
             views={data.map(x => ({
               ...x,
               srcset: x.srcSet,
               caption: x.title
             }))}
           />
         </Modal>
       ) : null}
     </ModalGateway>   

     
        
</div>
<br></br>
              <h2 className="title is-size-4 has-text-weight-bold is-bold-light">
                artist statement
              </h2>  
              <div className = "content"> 
              {statement}
              </div>
              <div className = "content"> 
              <Link  to="https://arcadia-inc.org">
              Arcadia Inc website
              </Link>
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

ArcadiaIncPageTemplate.propTypes = {
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

const ArcadiaIncPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ArcadiaIncPageTemplate
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

ArcadiaIncPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ArcadiaIncPage;

export const aboutPageQuery = graphql`
  query ArcadiaIncPage($id: String!) {
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
