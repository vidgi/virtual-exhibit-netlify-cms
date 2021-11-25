import React from 'react'
import PropTypes from 'prop-types'
import { ZoomPrincessPageTemplate } from '../../templates/zoom-princess-page'

const ZoomPrincessPagePreview = ({ entry, widgetFor }) => (
  <ZoomPrincessPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ZoomPrincessPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ZoomPrincessPagePreview
