import React from 'react'
import Styled from 'styled-components'

const Carousel = (props) => {
    const data = props.data.projects;

    return(
        data.map(project => {
            return (
            <CarouselItem {...props}>
                <h5>{project.title}</h5>
                <a href={project.codeUrl}>See the code!</a>
                <a href={project.url}>Check it out!</a>
            </CarouselItem>
            )
        })
    )
}

export default Carousel;

const CarouselItem = Styled.a`

`