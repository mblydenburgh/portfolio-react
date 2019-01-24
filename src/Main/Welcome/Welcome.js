import React from 'react'
import Styled from 'styled-components'

const Welcome = (props) => {
    return (
        <WelcomeDiv>
            <h3>Hi, I'm Mike.</h3>
            <h5>Chemical Engineer turned Developer-I like to build things, this is my place to show that.</h5>
            <h6>
                <span id="skills-show">Skills <i class="fa fa-chevron-circle-right" aria-hidden="true"></i></span>
                <span id="skills-span" class="hide">
                    Responsive Design (CSS Grid, Materialize, Bootstrap), Modern Javascript(ES6), React, AngularJS/Angular, RESTful
                    Services,
                    Python
                <i id="skills-hide" class="fa fa-chevron-circle-left" aria-hidden="true"></i>
                </span>
            </h6>
            
            <h6>
              <span id="hobbies-show">On the side...<i class="fa fa-chevron-circle-right" aria-hidden="true"></i></span>
              <span id="hobby-text" class="hide">
                I love being a home cook, hiking, traveling, and finding delicious beers!
                <i id="hobbies-hide" class="fa fa-chevron-circle-left" aria-hidden="true"></i>
              </span>
            </h6>
        </WelcomeDiv>
    );
};

export default Welcome;

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