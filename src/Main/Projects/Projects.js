import React from 'react';
import Project from './Project/Project';
import Styled from 'styled-components'
import Carousel from './Carousel/Carousel'

const data = require('../../projects.json');


const Projects = (props) => {
    
        return (
            <ProjectDiv>
                <Carousel data={data}/>
                {data.projects.map(project=>{
                    return (<Project title={project.title} imgUrl={project.imgUrl} url={project.url} codeUrl={project.codeUrl} />);
                })}
            </ProjectDiv>
        );
    };


export default Projects;

const ProjectDiv = Styled.div`
  background: #015249;
  text-align: center;
  color: white;
  min-height:85vh;
  display:grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: auto 1fr;  
`;