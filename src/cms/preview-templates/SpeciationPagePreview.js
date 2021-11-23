import React from 'react'
import PropTypes from 'prop-types'
import { SpeciationPageTemplate } from '../../templates/speciation-page'

const SpeciationPagePreview = ({ entry, widgetFor }) => (
  <SpeciationPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

SpeciationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SpeciationPagePreview
