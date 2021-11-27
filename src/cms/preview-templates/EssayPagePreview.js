import React from 'react'
import PropTypes from 'prop-types'
import { EssayPageTemplate } from '../../templates/essay-page'

const EssayPagePreview = ({ entry, widgetFor }) => (
  <EssayPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

EssayPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EssayPagePreview
