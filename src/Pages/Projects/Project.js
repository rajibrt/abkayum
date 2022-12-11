import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Project = () => {
    // const [project, setProject] = useState([])
    const project = useLoaderData();
    const { id, name } = project;
    console.log(name);
    // const { id, name } = selectedProject;
    // console.log(project);

    // useEffect(() => {
    //     fetch(`projects.json/${id}`)
    //         .then(res => res.json())
    //         .then(data => setProject(data))

    // }, [id])

    return (
        <div>
            <h2>Project details view page</h2>
            <h2>Project Name: {name} </h2>
        </div>
    );
};

export default Project;