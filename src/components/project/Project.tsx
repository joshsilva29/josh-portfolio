import "./project.css";
import { useNavigate } from "react-router"
import { useState } from "react";

type ProjectProps = {
    name: string;
    src: string;
    desc: string;
    page: string;
}

function Project({name, src, desc, page}: ProjectProps) {
    const [loaded, setLoaded] = useState(false);
    let navigate = useNavigate();
    return (
        <div id="project-container" onClick={() => navigate(`/${page}`)}>
            <div className='project-name'>{name}</div>
            {
                !loaded && (
                    <div className="loading-project"/>
                )
            }
            <img
                src={`${import.meta.env.BASE_URL}images/${src}`}
                className={`project-photo fade-in ${loaded ? 'loaded': ''}`}
                alt={name}
                onLoad={() => setLoaded(true)}
                style={{ display: loaded ? 'block' : 'none' }}
            />
            <div className="project-text">{desc}</div>
        </div>
    )
}

export default Project;