import React, { forwardRef } from 'react';
import styled from 'styled-components';


const FourthContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
`;

const FourthSection = styled.article `
  
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  border: 1px solid black;
`

const FourthInfo = styled.div `
    width: 30%;
    height: 30vh;
    background-color: #6c302a;
`

const FourthText = styled.div `
    width: 30%;
    height: 30vh;
    background-color: #857c7b;

`
const FourthPage = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <FourthContent ref={ref}>
      <FourthSection>
        <FourthInfo />
        <FourthText />
      </FourthSection>
    </FourthContent>
  );
});

export default FourthPage;

