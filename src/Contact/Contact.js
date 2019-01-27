import React, { Component } from 'react';
import Styled from 'styled-components';
import Radium from 'radium';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Contact extends Component {
render(){
  const iconStyle = {
    color: '#555',

    ':hover':{
      color: '#777'
    }
  }

    return (
        <ContactDiv>
            <ContactHeader>I would be happy to help, lets connect!</ContactHeader>
            <a href="https://github.com/mikebly" className="contact-link" id="github"><i key='1' className="fab fa-github fa-5x" style={iconStyle} /></a>
            <a href="https://www.freecodecamp.org/mikebly" className="contact-link" id="profile-link" target="_blank" rel="noopener noreferrer"><i key='2' className="fab fa-free-code-camp fa-5x" style={iconStyle} /></a>
            <a href="https://codepen.io/mikebly/" className="contact-link" id="codepen"><i key='3' className="fab fa-codepen fa-5x" style={iconStyle} /></a>
            <a href="https://www.linkedin.com/in/michael-blydenburgh-99a68872/" className="contact-link" id="linkedin"><i key='4' className="fab fa-linkedin fa-5x" style={iconStyle} /></a>
         </ContactDiv>
        );
}
};

// export default Contact;

Contact = Radium(Contact);

const ContactDiv = Styled.div`
  background-color:#77c9d4;
  color: #555;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 20px;
`;

const ContactHeader = Styled.h1`
  grid-column:1/-1;
`;