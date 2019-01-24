import React from 'react';
import Styled, { css } from 'styled-components';

const Transition = (props) => {
    return (
        <TransitionDiv />
    );
};

export default Transition;

const TransitionDiv = Styled.div`
    height:30vh;
    
    background: ${props => {
        switch(props){
            case 'first':
                return 'linear-gradient(180deg, #57bc90, #015249)';
            case 'second':
                return 'linear-gradient(180deg, #015249, #77c9d4)';
        }
    }}
`;