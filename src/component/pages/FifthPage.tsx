import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const FifthContent = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
  background-color: #fff;
  color: #000;

  @media screen and (max-width: 768px) {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  flex-direction: column;
  }
`;

const FifthSection = styled(motion.article)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #000;

  @media screen and (max-width: 768px) {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  flex-direction: column;
  }
`;

const FifthTitle = styled(motion.h4)`
  width: 50%;
  height: 6rem;
  color: #000;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 3rem;
  letter-spacing: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
    margin: 0 0 0 2rem;
}
`;

const FifthPhotoContainer = styled(motion.div)`
  width: 80%;
  height: 70%;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
    margin: 0 0 0 2rem;
}
`;

const Fifthitem = styled(motion.ul)`
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  margin: 1rem;
  display: grid;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
    margin: 0 0 0 2rem;
}

 li {
    width: 20rem;
    height: 20rem;
    border: 1px solid #000;

 }
`;

const FifthPage = forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <FifthContent ref={ref}>
            <FifthSection>
                <FifthTitle>
                    PHOTO
                </FifthTitle>
                <FifthPhotoContainer>
                    <Fifthitem>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </Fifthitem>
                </FifthPhotoContainer>
            </FifthSection>
        </FifthContent>
      );
    });

export default FifthPage;