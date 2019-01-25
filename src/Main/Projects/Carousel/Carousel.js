import React, { Component } from 'react';
import Styled from 'styled-components';
import M from 'materialize-css';


export default class Carousel extends Component {
    data = this.props.data.projects;

    componentDidMount(){
        const carouselElement = document.querySelector('.carousel');
        const carouselOptions = {
            indicators: true,
            noWrap: true,
            dist: -50
        };
        M.Carousel.init(carouselElement,carouselOptions);
        const carouselInstance = M.Carousel.getInstance(carouselElement);
        setTimeout(autoPlay,5000);
        function autoPlay(){
            carouselInstance.next();
            setTimeout(autoPlay,5000);
        }
    }

    render(){
      return(
          <div class="carousel carousel-slider">
            {this.data.map(project => {
                return (
                <CarouselItem {...this.props}>
                    <h5>{project.title}</h5>
                    <a href={project.codeUrl}>See the code!</a>
                    <a href={project.url}>Check it out!</a>
                </CarouselItem>
                );
            })}
        </div>
      );  
    }
}


const CarouselItem = Styled.a`

`;