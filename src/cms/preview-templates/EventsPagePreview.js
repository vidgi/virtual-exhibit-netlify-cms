import React from 'react'
import PropTypes from 'prop-types'
import { EventsPageTemplate } from '../../templates/events-page'

const EventsPagePreview = ({ entry, widgetFor }) => {
  const entryPricingPlans = entry.getIn(['data', 'events', 'events'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <EventsPageTemplate
      title={entry.getIn(['data', 'title'])}
      events={{
        events: pricingPlans,
      }}
      content={widgetFor('body')}
    />
  )
}

EventsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventsPagePreview
