import React from 'react'
import PropTypes from 'prop-types'
import { AntechamberPageTemplate } from '../../templates/antechamber-page'

const AntechamberPagePreview = ({ entry, widgetFor }) => (
  <AntechamberPageTemplate
    title={entry.getIn(['data', 'title'])}
    artist={entry.getIn(['data', 'artist'])}
    statement={entry.getIn(['data', 'statement'])}
    bio={entry.getIn(['data', 'bio'])}
    link1title={entry.getIn(['data', 'link1title'])}
    link1link={entry.getIn(['data', 'link1link'])}
    link2title={entry.getIn(['data', 'link2title'])}
    link2link={entry.getIn(['data', 'link2link'])}
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
