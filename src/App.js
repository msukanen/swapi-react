import './App.css'
import Fetcher from './components/Fetcher'
import Nav from './components/Nav'
import { swapi_url } from './SWAPI'
import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'

function App() {
	const [navState, setNavState] = useState(0)

	return (
		<div className="App">
			<Nav stateFunc={setNavState} />
			{
				  navState === 'about' ? <About />
				: navState === 'contact' ? <Contact />
				: <Fetcher url={swapi_url}/>
			}
		</div>
	)
}

export default App
