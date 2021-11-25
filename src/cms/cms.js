import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import EventsPagePreview from './preview-templates/EventsPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import SpeciationPagePreview from './preview-templates/SpeciationPagePreview'
import ZoomPrincessPagePreview from './preview-templates/ZoomPrincessPagePreview'
import AntechamberPagePreview from './preview-templates/AntechamberPagePreview'
import PacTracerPagePreview from './preview-templates/PacTracerPagePreview'
import ArcadiaIncPagePreview from './preview-templates/ArcadiaIncPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('events', EventsPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('speciation', SpeciationPagePreview)
CMS.registerPreviewTemplate('zoom princess', ZoomPrincessPagePreview)
CMS.registerPreviewTemplate('antechamber', AntechamberPagePreview)
CMS.registerPreviewTemplate('pac tracer', PacTracerPagePreview)
CMS.registerPreviewTemplate('arcadia inc', ArcadiaIncPagePreview)