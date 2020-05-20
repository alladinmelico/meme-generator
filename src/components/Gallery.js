import React, { useState, useEffect, useContext } from 'react'
import { MemeContext } from '../MemeContext'

const Gallery = (props) => {
	const [selectedMeme, setSelectedMeme] = useContext(MemeContext)
	const [memes, setMeme] = useState([])

	useEffect(() => {
		fetchMemes()
	}, [])

	const fetchMemes = async () => {
		const data = await fetch('https://api.imgflip.com/get_memes')
		const items = await data.json()
		setMeme(items.data.memes)
	}

	const imageSelection = (event) => {
		try {
			const searchedMeme = memes.find(
				(meme) => Number(meme.id) === Number(event.target.id)
			)
			setSelectedMeme({
				id: event.target.id,
				memeURL: searchedMeme.url,
				items: searchedMeme.box_count,
			})
		} catch (e) {
			console.log(e)
		}

		window.scrollTo(0, 0)
	}

	const images = memes.map((image) => (
		<div
			key={image.id}
			className='gallery-item'
			style={{ backgroundImage: 'url(' + image.url + ')' }}
		>
			<p id={image.id} onClick={imageSelection}>
				{image.name}
			</p>
		</div>
	))

	return <div className='gallery'>{images}</div>
}

export default Gallery
