import React from 'react'
import PropTypes from 'prop-types'
import { ZoomPrincessPageTemplate } from '../../templates/zoom-princess-page'

const ZoomPrincessPagePreview = ({ entry, widgetFor }) => (
  <ZoomPrincessPageTemplate
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

ZoomPrincessPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ZoomPrincessPagePreview
