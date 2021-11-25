import React from 'react'
import PropTypes from 'prop-types'
import { PacTracerPageTemplate } from '../../templates/pac-tracer-page'

const PacTracerPagePreview = ({ entry, widgetFor }) => (
  <PacTracerPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PacTracerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PacTracerPagePreview
