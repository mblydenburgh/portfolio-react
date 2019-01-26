import React from 'react';
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = (props) => {
    return (
        <ContactDiv>
            <ContactHeader>I would be happy to help, lets connect!</ContactHeader>
            <a href="https://github.com/mikebly" className="contact-link" id="github">Github</a>
            <a href="https://www.freecodecamp.org/mikebly" className="contact-link" id="profile-link" target="_blank" rel="noopener noreferrer">Free Code Camp</a>
            <a href="https://codepen.io/mikebly/" className="contact-link" id="codepen">Codepen</a>
            <a href="https://www.linkedin.com/in/michael-blydenburgh-99a68872/" className="contact-link" id="linkedin">LinkedIn</a>
         </ContactDiv>
        );
};

export default Contact;

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