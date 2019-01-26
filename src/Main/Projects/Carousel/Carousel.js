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
        console.log(carouselElement);
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
          <div className="carousel carousel-slider">
            {this.data.map((project,key) => {
                return (
                <CarouselItem key={key} className="carousel-item" {...this.props}>
                    <ItemDiv>
                        <h5>{project.title}</h5>
                        <a href={project.codeUrl}>See the code!</a>
                        <a href={project.url}>Check it out!</a>
                    </ItemDiv>
                </CarouselItem>
                );
            })}
        </div>
      );  
    }
}


const CarouselItem = Styled.div`
    background:url(${props=>props.data.projects.imgUrl}) center center;
`;

const ItemDiv = Styled.div`
  background: rgba(50,50,50,.8);
  padding: 10px 0;
`;