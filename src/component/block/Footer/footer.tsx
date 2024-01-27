import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width: 95%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;
  left: 0;
  bottom: 0;
  right: 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background-color: #fff;
  border-top: 1px solid #000;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterUl = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px auto;
  color: #000;

  @media (max-width: 768px) {
    width: 100%;
  }

`;

const FooterText = styled.p`
width: 100%;
padding: 1rem;
font-size: 0.8rem;
  
@media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }

`;
const footer = () => {
  return (
    <Footer>
      <FooterUl>
        <FooterText>
        SEIMIN MUSIC ROCK FESTIVAL
        <br />
        ©2023 Lim Sung Min. All Rights Reserved.
        </FooterText>
      </FooterUl>
    </Footer>
  );
};

export default footer;
