import React, { forwardRef } from 'react';
import styled from 'styled-components';


const ThirdContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
`;

const ThirdSection = styled.article `
  
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`

const ThirdInfo = styled.div `
    width: 30%;
    height: 30vh;
    background-color: #6c302a;
`

const ThirdText = styled.div `
    width: 30%;
    height: 30vh;
    background-color: #857c7b;

`
const ThirdPage = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <ThirdContent ref={ref}>
      <ThirdSection>
        <ThirdInfo />
        <ThirdText />
      </ThirdSection>
    </ThirdContent>
  );
});

export default ThirdPage;

