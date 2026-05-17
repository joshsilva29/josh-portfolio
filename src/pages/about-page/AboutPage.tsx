import NavBar from "../../components/nav-bar/NavBar"
import ProfileCard from "../../components/profile-card/ProfileCard";

function AboutPage() {
    return (
        <div>
            <NavBar />
            <div className="container">
                <ProfileCard />
                <p>
                    i’m interested in full stack development and am comfortable using react for the frontend and 
                    node + express + aws for the backend. one of my projects, pokémonify, uses all of these tools!
                </p>
                <br></br>
                <p>
                    i have used a variety of languages in my coursework, such as python, java, c, and sql (among many others). 
                    i also have used figma to prototype projects! 
                    i am confident in my abilities as a programmer and am looking to grow as a software engineer.
                </p>
                <br></br>
                <p>
                    as for life outside of coding, i love to read, listen to music (madonna, as of late), and hang out with friends!
                </p>
            </div>
        </div>
    );
}

export default AboutPage;