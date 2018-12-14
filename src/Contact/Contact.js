import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = (props) => {
    return (
        <div id="contact">
            <h1>I would be happy to help, lets connect!</h1>
            <a href="https://github.com/mikebly" class="contact-link" id="github">Github</a>
            <a href="https://www.freecodecamp.org/mikebly" class="contact-link" id="profile-link" target="_blank" rel="noopener noreferrer">Free Code Camp</a>
            <a href="https://codepen.io/mikebly/" class="contact-link" id="codepen">Codepen</a>
            <a href="https://www.linkedin.com/in/michael-blydenburgh-99a68872/" class="contact-link" id="linkedin">LinkedIn</a>
         </div>
        );
};

export default Contact;