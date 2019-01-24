import React from 'react';
import Projects from './Projects/Projects';
import Welcome from './Welcome/Welcome';
import Transition from '../Transition/Transition';

const Main = (props) => {
    return(
        <div>
            <Welcome />
            <Transition first />
            <Projects />
        </div>
        );
        
};

export default Main;