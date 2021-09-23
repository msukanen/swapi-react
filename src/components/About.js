import { swapi_url } from "../SWAPI"

export const author = <b>Markku &quot;Marsupilami&quot; Sukanen</b>
export const github = "https://github.com/msukanen/swapi-react"

function About() {return(
    <section>
        <h1>Ab<sub>0</sub>u7</h1>
        
        <h3>Author</h3>
        <p>{author}</p>
        <p>A coder by heart and dreams, and so on and so forth.</p>
        
        <h3>This &quot;App&quot;</h3>
        <p>
            Welp, this &quot;app&quot; is about <code>S<sub>tar</sub>W<sub>ars</sub>API</code> and how to fetch
            stuff with it from <code>{swapi_url}</code>. Have fun!
        </p>
    </section>
)}

export default About
