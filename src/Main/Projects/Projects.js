import React from 'react';
import Project from './Project/Project';

const Projects = (props) => {
    return (
        <div>
            <h1>Projects</h1>
            <Project title={"Munchies Metropolis"} imgUrl={"./../../Images/munchie.jpg"} />
        </div>
        );
};

export default Projects;