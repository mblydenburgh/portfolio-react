import React from 'react';
import Styled from 'styled-components';

const Footer = (props) => {
  return(
      <PageFoot>Designed and Coded by Michael Blydenburgh (2019)</PageFoot>
      );
};

export default Footer;

const PageFoot = Styled.div`
  text-align: center;
  background-color: #77c9d4;
  padding-bottom:10px;
  color: #555;
`