import React from 'react'
import PropTypes from 'prop-types'
import { ArcadiaIncPageTemplate } from '../../templates/arcadia-inc-page'

const ArcadiaIncPagePreview = ({ entry, widgetFor }) => (
  <ArcadiaIncPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ArcadiaIncPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArcadiaIncPagePreview
