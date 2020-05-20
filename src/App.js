import React from 'react'
import { MemeProvider } from './MemeContext'
import Caption from './components/Caption'
import Gallery from './components/Gallery'
import SelectedImage from './components/SelectedImage'

const App = () => {
	return (
		<MemeProvider>
			<div className='App'>
				<Caption />
				<SelectedImage />
				<Gallery />
			</div>
		</MemeProvider>
	)
}

export default App
