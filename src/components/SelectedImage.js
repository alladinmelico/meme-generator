import React from 'react'

const SelectedImage = (props) => {
	let url = ''
	if (props.url) {
		url = props.url
	} else if (typeof props.meme !== 'undefined') {
		url = props.meme.url
	}
	return (
		<div className='selected-image'>
			<img src={url} alt='' />
		</div>
	)
}

export default SelectedImage
