import React from 'react';
import Project from './Project/Project';
import Styled from 'styled-components';
import Carousel from './Carousel/Carousel';

const data = require('../../projects.json');

const Projects = (props) => {
    
    const h1Stlye = {
        margin: 0
    }
        return (
            <ProjectDiv>
                <h1 style={h1Stlye}>A Brief Portfolio</h1>
                <CarouselDiv>
                    <Carousel data={data}/>
                </CarouselDiv>
                
                <ProjectTiles>
                    {data.projects.map((project,key)=>{
                        return (<Project key={key} title={project.title} imgUrl={project.imgUrl} url={project.url} codeUrl={project.codeUrl} />);
                    })}
                </ProjectTiles>
            </ProjectDiv>
        );
};


export default Projects;

const ProjectDiv = Styled.div`
    background: #015249;
    min-height:85vh;
    color: white;
    text-align: center;
`

const ProjectTiles = Styled.div`
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: auto 1fr;
  display:none;
  
  @media(min-width:550px) and (max-width:700px){
      display:grid;
  }
`;

const CarouselDiv = Styled.div`
  max-width: 75%;
  justify-self: center;
  align-self: center;
  border-radius: 15px;
  display: grid;
  
  margin:2rem auto 0 auto
  
  @media(min-width:550px) and (max-width:700px){
      display:none;
  }
`;