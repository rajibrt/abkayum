import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([])
    console.log(projects);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])

    return (
        <div className="my-10">
            <div className='flex flex-wrap justify-center gap-8'>
                {
                    projects.map(project => <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>)
                }

            </div>
        </div>
    );
};

export default Projects;