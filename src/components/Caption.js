import React, { useState, useContext } from 'react'
import { MemeContext } from '../MemeContext'
import { TextField, Button } from '@material-ui/core'
import qs from 'qs'

const Caption = () => {
	const [memes, setMeme] = useContext(MemeContext)
	const [text, setText] = useState({
		text1: '',
		text2: '',
		text3: '',
		text4: '',
		text5: '',
	})

	const updateText = (e) => {
		e.persist()
		setText((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const addText = (event) => {
		event.preventDefault()
		const data = new FormData(event.target)
		let username = process.env.REACT_APP_MEME_ACCOUNT
		let password = process.env.REACT_APP_MEME_PASSWORD
		let boxes = [
			{ text: data.get('text1') },
			{ text: data.get('text2') },
			{ text: data.get('text3') },
			{ text: data.get('text4') },
			{ text: data.get('text5') },
		]
		try {
			fetch('https://api.imgflip.com/caption_image', {
				method: 'POST',
				headers: {
					'Content-Type':
						'application/x-www-form-urlencoded; charset=UTF-8',
				},
				body: qs.stringify({
					template_id: memes.id,
					username: 'alladin',
					password: '.dVaKiz3-L?H$q*',
					boxes: boxes,
				}),
			})
				.then((respond) => respond.json())
				.then((data) => {
					setMeme({ memeURL: data.data.url })
					setText({
						text1: '',
						text2: '',
						text3: '',
						text4: '',
						text5: '',
					})
				})
				.catch((e) => {
					setMeme({ memeURL: '', items: 0 })
				})
		} catch (e) {
			console.log(e)
		}
	}

	const texts = []

	for (let i = 1; i <= memes.items; i++) {
		texts.push(
			<TextField
				key={i}
				name={`text${i}`}
				label={`Text ${i}`}
				type='text'
				value={text[`text${i}`]}
				onChange={updateText}
				variant='outlined'
				required
			/>
		)
	}
	return (
		<div id='caption'>
			{memes.items !== 0 && (
				<form onSubmit={addText}>
					{texts}
					<Button
						type='submit'
						variant='contained'
						color='primary'
						fullWidth
					>
						Lezz go!
					</Button>
				</form>
			)}
		</div>
	)
}

export default Caption
