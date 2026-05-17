import NavBar from "../../../components/nav-bar/NavBar";
import ProjectHeader from "../../../components/project-header/ProjectHeader";

function Portfolio() {
    let name = "portfolio website";
    let tools = ["react", "typescript", "figma", "github pages"];
    let link = "";
    return (
        <div> 
            <NavBar />
            <div className="container">
                <ProjectHeader name={name} tools={tools} link={link}/>
                <p>
                    this is my portfolio website! 
                </p>
                <br></br>
                <p>
                    i first prototyped in figma to test the general layout and font choices. then, i built the website in react, following the prototypes closely. 
                    lastly, i decided to host it on github (hosting on aws felt like overkill).
                </p>
            </div>
        </div>
    );
}

export default Portfolio;