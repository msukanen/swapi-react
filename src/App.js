import './App.css'
import Fetcher from './components/Fetcher'
import Nav from './components/Nav'

const url = "https://swapi.dev/api/"

function App() {
	return (
		<div className="App">
			<Nav />
			<Fetcher url={url}/>
		</div>
	)
}

export default App
