import React from 'react'
import PropTypes from 'prop-types'
import { ExhibitionPageTemplate } from '../../templates/exhibition-page'

const ExhibitionPagePreview = ({ entry, widgetFor }) => (
  <ExhibitionPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ExhibitionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ExhibitionPagePreview
