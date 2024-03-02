import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card14.css'

const GalleryCard14 = (props) => {
  return (
    <div className={`gallery-card14-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="gallery-card14-image"
      />
      <h2 className="gallery-card14-text">{props.title}</h2>
      <span className="gallery-card14-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard14.defaultProps = {
  title: 'Project Title',
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  rootClassName: '',
  subtitle: 'Lorem ipsum dolor sit amet',
}

GalleryCard14.propTypes = {
  title: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  subtitle: PropTypes.string,
}

export default GalleryCard14
