import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Events from "../components/Events";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const EventsPageTemplate = ({
  title,
  events,
}) => (
  <div className="content">
    
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h2 className="has-text-weight-semibold is-size-3">
                {title}
              </h2>
              <Events data={events.events} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

EventsPageTemplate.propTypes = {
  title: PropTypes.string,
  events: PropTypes.shape({
    events: PropTypes.array,
  }),
};

const EventsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <EventsPageTemplate
        title={frontmatter.title}
        events={frontmatter.events}
      />
    </Layout>
  );
};

EventsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default EventsPage;

export const eventsPageQuery = graphql`
  query EventsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
