import "./projectheader.css";

type ProjectHeaderProps = {
    name: string;
    tools: string[];
    link: string;
}

function ProjectHeader({ name, tools, link }: ProjectHeaderProps) {
    return (
        <div className="project-header">
            <div id="project-title">{name}</div>
            <div id="project-info">
                {tools.map((tool, index) => (
                    <span key={index}>
                        {tool}
                        {index !== tools.length - 1 && " ⋅ "}
                    </span>
                ))}
                {link && <div><a href={link}>website link</a></div>}
            </div>
        </div>
    )
}

export default ProjectHeader;