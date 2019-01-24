import React from 'react';
import Styled from 'styled-components';

const Nav = (props) => {
    return (
        <NavDisplay>
            <NavUl>
                <NavLi><NavLink href="#welcome-section">Welcome</NavLink></NavLi>
                <NavLi><NavLink href="#projects">Portfolio</NavLink></NavLi>
                <NavLi><NavLink href="#contact">Contact</NavLink></NavLi>
            </NavUl>
        </NavDisplay>
    );
};

export default Nav;

const NavDisplay = Styled.div`
    background-color: #57bc90;
    box-shadow: 0 3px 2px #57bc90;
`;

const NavUl = Styled.ul`
    text-align: center;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
`;

const NavLi = Styled.li`
    padding: 0 25px;
`;

const NavLink = Styled.a`
    color: white;
    
    &:hover {
        color: #89ffcc;
    }
`;

