import React from 'react';

const Project = (props) => {
    
    const cardStyle = {
      width: '300px'  
    };
    
    return(
        <div class = "card">
            <img src={props.imgUrl} alt={props.title} style={cardStyle} />
            <p class="project-title">{props.title}</p>
            <a class="btn waves-effect" href={props.url} target="_blank" rel="noopener noreferrer">Check it out!</a>
        </div>
        );
};

export default Project;