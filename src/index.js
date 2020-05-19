import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.render(
	<main>
		<Header />
		<App />
		<Footer />
	</main>,
	document.getElementById('root')
)
serviceWorker.unregister()
