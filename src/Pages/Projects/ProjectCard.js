import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();

const ProjectCard = ({ project, selectedProject }) => {
    const { id, thumbnail, name, tools } = project;
    return (

        // <div className='grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10  mx-auto justify-items-center'>
        <div className='md:w-1/4 w-full md:mx-0 mx-4 justify-items-center'>

            <div data-aos="fade-up" className="card w-full bg-base-100 shadow-xl transition ease-in-out delay-8000">
                <figure><img className='md:h-80 h-64 w-full object-cover object-top transition-all hover:object-bottom hover:ease-in-out duration-[2s] hover:duration-[3s] cursor-pointer' src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <div className="card-actions justify-end">
                        <p>Used phone buy & sell</p>
                    </div>
                    <ul>
                        {tools.map((t, i) =>
                            <kbd className="kbd kbd-lg m-[2px] text-sm"
                                key={i}>{t}</kbd>
                        )}
                    </ul>

                </div>
                <Link to={`/project/${id}`} className='btn m-4' rel="noopener noreferrer">View Details</Link>
            </div>

        </div>
    );
};

export default ProjectCard;