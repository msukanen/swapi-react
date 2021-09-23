import { author } from "./About"

export const email = <>classified@no-email.spam</>

function Contact() {return(
    <div id="contact">
        <section>
            <h1>Contact</h1>
            <p>{author}</p>
            <p>e-mail: <code>{email}</code></p>
        </section>
    </div>
)}

export default Contact
