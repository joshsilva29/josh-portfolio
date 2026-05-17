import NavBar from "../../components/nav-bar/NavBar";
import "./contactpage.css";

function ContactPage() {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="bold" id="contact-text">reach me at: </div>
                <div>
                    <a href="mailto:joshuasilva1117@gmail.com">joshuasilva1117@gmail.com</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/joshua-silva-359756177/">linkedin</a>
                </div>
                <div>
                    <a href="https://github.com/joshsilva29">github</a>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;