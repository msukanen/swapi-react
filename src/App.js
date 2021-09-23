import './App.css'
import Fetcher from './components/Fetcher'
import Nav from './components/Nav'
import { swapi_url } from './SWAPI'

function App() {
	return (
		<div className="App">
			<Nav />
			<Fetcher url={swapi_url}/>
		</div>
	)
}

export default App
