import React from 'react';

const Project = (props) => {
    return(
        <div class = "card">
            <img src={props.imgUrl} alt={props.title} />
            <p class="project-title">{props.title}</p>
            <a class="btn waves-effect" href={props.url} target="_blank">Check it out!</a>
        </div>
        );
};

export default Project;