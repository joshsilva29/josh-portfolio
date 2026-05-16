import "./project.css";
import { useNavigate } from "react-router"

type ProjectProps = {
    name: string;
    src: string;
    desc: string;
    page: string;
}

function Project({name, src, desc, page}: ProjectProps) {
    console.log(name, src, desc, page)
    let navigate = useNavigate();
    return (
        <div id="project-container" onClick={() => navigate(`/${page}`)}>
            <div className='project-name'>{name}</div>
            <img src={`../../../images/${src}`} className="project-photo"/>
            <div className="project-text">{desc}</div>
        </div>
    )
}

export default Project;