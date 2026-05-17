import NavBar from "../../../components/nav-bar/NavBar";
import ProjectHeader from "../../../components/project-header/ProjectHeader";
import { useState } from "react";
import "./pokemonify.css";

function Pokemonify() {
    const [loaded, setLoaded] = useState(false);
    const [loaded1, setLoaded1] = useState(false);
    let name = "pokémonify";
    let tools = ["react", "node", "aws", "typescript"];
    let link = "https://mnfy.me";
    let imgPath = "../../../../images/";
    let img1 = `${imgPath}pokemonify-mobile-1.jpg`;
    let img2 = `${imgPath}pokemonify-mobile-2.jpg`;
    return (
        <div> 
            <NavBar />
            <div className="container">
                <ProjectHeader name={name} tools={tools} link={link}/>
                <p>
                    pokémonify is a web application that assigns the user a pokémon based on their listening history. 
                </p>
                <br></br>
                <div className="flex-row flex-wrap">
                    {
                        !loaded && (
                            <div className="loading"/>
                        )
                    }
                    <img
                        src={img1}
                        className={`phone-screenshot fade-in ${loaded ? 'loaded': ''}`}
                        alt="pokemonify-mobile-1.jpg"
                        onLoad={() => setLoaded(true)}
                        style={{ display: loaded ? 'block' : 'none' }}
                    />
                    {
                        !loaded1 && (
                            <div className="loading"/>
                        )
                    }
                    <img
                        src={img2}
                        className={`phone-screenshot fade-in ${loaded ? 'loaded': ''}`}
                        alt="pokemonify-mobile-2.jpg"
                        onLoad={() => setLoaded1(true)}
                        style={{ display: loaded1 ? 'block' : 'none' }}
                    />                   
                </div>
                <br></br>
                <p>
                    initially, this project used ejs templates for server-side rendering, which proved to be very rigid. 
                    i migrated the front end to react and hosted the node backend on an aws lambda to allow for a more modern and flexible design.
                </p>
                <br></br>
                <p>
                    migrating the frontend from static ejs templates to react was generally straightforward, since it allowed for cleaner code. 
                    ejs templates do not allow for any dynamic elements, so i was able to incorporate additional features using react.
                </p>
                <br></br>
                <p>
                    the backend posed its own set of problems. there were problems using express within an aws lambda (it’s a bit of an “anti-pattern”), 
                    and there were problems with cookies passing through the api gateway. however, after debugging, the backend ended up fully functional.
                </p>
                <br></br>
                <p>
                    i built pokémonify because of the rise in popularity in sharing listening histories. websites such as receiptify, spotify pie, and obscurify became popular, 
                    and i thought pokémonify could provide a new way of visualizing one’s listening habits.
                </p>
            </div>
        </div>
    );
}

export default Pokemonify;