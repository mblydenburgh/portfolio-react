import React, { Component } from 'react'
import Styled from 'styled-components'


export default class Welcome extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            skills:false,
            hobby:false
        }
    }

    render(){

    const handleClick = (event) => {
        console.log(event.target);
        if(event.target.id === "skills-show"){
            this.setState({skills:true});
        }

        if(event.target.id === "skills-hide"){
            this.setState({skills:false})
        }

        if(event.target.id === "hobby-show"){
            this.setState({hobby:true});
        }

        if(event.target.id === "hobby-hide"){
            this.setState({hobby:false})
        }

        
    }

    
    return (
        <WelcomeDiv>
            <h3>Hi, I'm Mike.</h3>
            <h5>Chemical Engineer turned Developer-I like to build things, this is my place to show that.</h5>
            <h6>
                {this.state.skills
                    ?
                    <span onClick={(event) => handleClick(event)} id="skills-span">
                    Responsive Design (CSS Grid, Materialize), Modern Javascript(ES6), React, AngularJS/Angular, RESTful
                    Services,
                    Python
                    <i id="skills-hide" className="fa fa-chevron-circle-left" aria-hidden="true"></i>
                    </span>
                    :
                    <span onClick={(event) => handleClick(event)}>Skills <i id="skills-show" className="fa fa-chevron-circle-right" aria-hidden="true"></i></span>
                }
            </h6>
            
            <h6>
                {this.state.hobby
                    ?
                    <span onClick={(event) => handleClick(event)} id="hobby-text">
                    I love being a home cook, hiking, traveling, and finding delicious beers!
                    <i id="hobby-hide" className="fa fa-chevron-circle-left" aria-hidden="true"></i>
                    </span>
                    :
                    <span onClick={(event) => handleClick(event)}>On the side...<i id="hobby-show" className="fa fa-chevron-circle-right" aria-hidden="true"></i></span>
                }
            </h6>
        </WelcomeDiv>
    );
}
};

const WelcomeDiv = Styled.div`
    height:100vh;
    background: #57bc90;
    color: white;
    margin: 0px;
    padding: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`