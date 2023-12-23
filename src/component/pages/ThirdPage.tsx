import React, { forwardRef } from 'react';
import styled from 'styled-components';


const ThirdContent = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
  background-color: #000000;
`;

const ThirdSection = styled.article `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ThirdTitle = styled.h4 `
width: 50%;
height: 6rem;
border: 1px solid #fff;
color: #fff;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
justify-content: center;
align-items: center;
display: flex;
font-size: 3rem;
letter-spacing: 2rem;
`

const ThirdeSlide = styled.div`
  width: 100%;
  height: 30rem;
  border: 1px solid #fff;
`

const ThirdPage = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <ThirdContent ref={ref}>
      <ThirdSection>
        <ThirdTitle>ARTIST</ThirdTitle>
        <ThirdeSlide></ThirdeSlide>
      </ThirdSection>
    </ThirdContent>
  );
});

export default ThirdPage;

