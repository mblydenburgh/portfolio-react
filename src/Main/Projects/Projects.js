import React from 'react';
import Project from './Project/Project';
// import jsonData from '../../projects.json';
const data = require('../../projects.json');


const Projects = (props) => {
    
        return (
            <ul>
                {data.projects.map(project=>{
                    return (<Project title={project.title} imgUrl={project.imgUrl} url={project.url} codeUrl={project.codeUrl} />)
                })}
            </ul>
        );
    };


export default Projects;