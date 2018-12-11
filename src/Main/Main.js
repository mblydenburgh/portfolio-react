import React from 'react';
import Projects from './Projects/Projects';

const Main = (props) => {
    return(
        <div id="welcome-section">
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

        <div class="transition" id="transition1"></div>
        
        <Projects />
        </div>
        );
        
};

export default Main;