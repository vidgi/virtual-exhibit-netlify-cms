import React from 'react'
import PropTypes from 'prop-types'
import { AntechamberPageTemplate } from '../../templates/antechamber-page'

const AntechamberPagePreview = ({ entry, widgetFor }) => (
  <AntechamberPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AntechamberPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AntechamberPagePreview
