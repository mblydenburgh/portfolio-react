/* eslint default-case:0 */
import React from 'react';
import Styled from 'styled-components';

const Transition = (props) => {
    return (
        <TransitionDiv {...props}/>
    );
};

export default Transition;

const TransitionDiv = Styled.div`
    height:${props => props.height}
    
    background: ${props => {
        switch(props.number){
            case 'first':
                return 'linear-gradient(180deg, #57bc90, #015249)';
            case 'second':
                return 'linear-gradient(180deg, #015249, #77c9d4)';
            case 'third':
                return 'linear-gradient(180deg, #77c9d4, #77c9d4)';
        }
    }}
`;