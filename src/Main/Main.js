import React from 'react';
import Projects from './Projects/Projects';
import Welcome from './Welcome/Welcome';
import Transition from '../Transition/Transition';

const Main = (props) => {
    return(
        <div>
            <Welcome />
            <Transition number='first' height='30vh' />
            <Projects />
        </div>
        );
        
};

export default Main;