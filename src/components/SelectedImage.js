import React, { useContext } from 'react'
import { MemeContext } from '../MemeContext'

const SelectedImage = () => {
	const [memes, setMemes] = useContext(MemeContext)
	return (
		<div className='selected-image'>
			{memes.memeURL !== '' && <img src={memes.memeURL} alt='' />}
		</div>
	)
}

export default SelectedImage
