import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Events from "../components/Events";
import { Helmet } from 'react-helmet'

// eslint-disable-next-line
export const EventsPageTemplate = ({ title, events, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return(
  <div className="content">
    <Helmet title= "Events | Sculpted in Our Image, Forged in Our Minds"/>  
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h2 className="has-text-weight-semibold is-size-3">
                {title}
              </h2>
              <Events data={events.events} />
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};

EventsPageTemplate.propTypes = {
  title: PropTypes.string,
  events: PropTypes.shape({
    events: PropTypes.array,
  }),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};


const EventsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <EventsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        events={post.frontmatter.events}
        content={post.html}
      />
    </Layout>
  );
};

EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EventsPage;

export const eventsPageQuery = graphql`
  query EventsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        events {
          events {
            title
            subtitle
            dates
            location
            link
          }
        }
      }
    }
  }
`;
