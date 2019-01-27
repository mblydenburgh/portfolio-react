import React from 'react';
import Styled from 'styled-components';

const Project = (props) => {
    
    const style = {
        margin: '10px'
    }

    return(
        <ProjectTile>
            <ProjectImage src={props.imgUrl} alt={props.title} />
            <p className="project-title">{props.title}</p>
            <a style={style} className="btn waves-effect" href={props.codeUrl} target="_blank" rel="noopener noreferrer">See the Code!</a>
            <a className="btn waves-effect" href={props.url} target="_blank" rel="noopener noreferrer">Check it out!</a>
        </ProjectTile>
        );
};

export default Project;

const ProjectTile = Styled.div`
    display: grid;
    justify-items: center;
    margin: 15px 0;
    max-width: 400px;
    justify-self: center;
`;

const ProjectImage = Styled.img`
    display: block;
    width: 90%;
    border-radius: 15px;
    box-shadow: 10px 10px 5px rgba(30,30,30,.5);
`;