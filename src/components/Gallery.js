import React from 'react'

const Gallery = (props) => {
    const images = Object.values(props.data).map(image => (
        <img key={image.id} src={image.url} alt="" className="gallery-item" onClick={() => props.clickHandler(image.id)}/>
    ))

    return (
        <div className="gallery">
            {images}
        </div>
    )
}

export default Gallery