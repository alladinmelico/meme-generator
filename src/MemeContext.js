import React, { useState, createContext } from 'react'

export const MemeContext = createContext()

export const MemeProvider = (props) => {
	const [memes, setMemes] = useState({
		id: 0,
		boxes: [],
		memeURL: '',
		items: 0,
	})

	return (
		<MemeContext.Provider value={[memes, setMemes]}>
			{props.children}
		</MemeContext.Provider>
	)
}
