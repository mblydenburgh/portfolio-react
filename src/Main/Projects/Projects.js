import React from 'react';
import Project from './Project/Project';
import Styled from 'styled-components';
import Carousel from './Carousel/Carousel';

const data = require('../../projects.json');

const Projects = (props) => {
    
        return (
            <div>
                <CarouselDiv>
                    <Carousel data={data}/>
                </CarouselDiv>
                
                <ProjectDiv>
                    {data.projects.map(project=>{
                        return (<Project title={project.title} imgUrl={project.imgUrl} url={project.url} codeUrl={project.codeUrl} />);
                    })}
                </ProjectDiv>
            </div>
        );
};


export default Projects;

const ProjectDiv = Styled.div`
  background: #015249;
  text-align: center;
  color: white;
  min-height:85vh;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: auto 1fr;
  display:none;
  
  @media(min-width:550px) and (max-width:700px){
      display:grid;
  }
`;

const CarouselDiv = Styled.div`
  max-width: 75%;
  height: 700px;
  justify-self: center;
  align-self: center;
  border-radius: 15px;
  
  @media(min-width:550px) and (max-width:700px){
      display:none;
  }
`;