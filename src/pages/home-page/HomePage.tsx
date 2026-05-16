import NavBar from "../../components/nav-bar/NavBar";
import Project from "../../components/project/Project";
import projectData from "../../assets/project-data/projects.json";
import "./homepage.css";

function HomePage() {
    let projectList = projectData.projects
    // let { name, src, desc, page } = projectList[0];
    return (
        <div>
            <NavBar />
            <div className="container">
                <p>
                    hi, i’m joshua silva! i’m a first-year computer science graduate student at 
                    stevens institute of technology with an interest in full stack development.       
                </p>
                <div className="projects-section">
                    <p className="sawarabi">
                        projects
                    </p>
                    <div className="projects-cards flex-row flex-wrap space-between align-between">
                        {projectList.map(({ name, src, desc, page }) => (
                            <Project name={name} src={src} desc={desc} page={page}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;