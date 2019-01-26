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
              const style = {
                background:`url(${project.imgUrl}) center center`
              }
                return (
                <CarouselItem key={key} className="carousel-item" style={style}>
                    <ItemDiv>
                        <h5>{project.title}</h5>
                        <Button href={project.codeUrl}>See the code!</Button>
                        <Button href={project.url}>Check it out!</Button>
                    </ItemDiv>
                </CarouselItem>
                );
            })}
        </div>
      );  
    }
}

//background:url(${props => props.data.projects.imgUrl}) center center;   
const CarouselItem = Styled.div`
  width:100%;
`;

const ItemDiv = Styled.div`
  background: rgba(50,50,50,.8);
  padding: 10px 0;
  margin: 250px auto auto auto;
  max-width: 75%;
`;

const Button = Styled.a`
  color: white;
  padding: 5px 1.5rem;
  margin: auto .25rem;
  background: rgba(100,100,100,.9);

  &:hover {
    color: #89ffcc;
  }
`;