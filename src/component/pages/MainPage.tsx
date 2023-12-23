import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import Header from "component/block/Header/header";
import SecondPage from './SecondPage';
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";

interface MainInfoProps {
  isScrolled: boolean;
}

interface MainSectionProps {
  isScrolled: boolean;
}

const MainContainer = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const MainContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  width: 100vw;
  height: auto;
  object-fit: cover;
  z-index: 1;
  position: absolute;
`;

const MainTitle = styled.div`
  width: 80%;
  height: auto;
  position: absolute;
  font-size: 5rem;
  color: #fff;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  opacity: 0.8;
  padding: 0;
  margin: 0;
  z-index: 2;
`;

const MainSubTitle = styled.div`
  width: 70%;
  height: auto;
  z-index: 2;
  font-size: 2rem;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 0.4rem;
`;

const MainSection = styled.article<MainSectionProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  margin-bottom: 39rem;
`;

const MainInfo = styled.div<MainInfoProps> `
  width: 100%;
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 1.2rem 1rem auto;
  position: fixed;
  top: ${({ isScrolled }) => (isScrolled ? "0" : "5vh")};
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #000;
  color: #fff;
  transition: transform 0.3s ease-in-out;

  &.hidden {
    transform: translateY(-100%);
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: center;

    li {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      cursor: pointer;
    }
  }
`;

const MainPage = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const firstPageRef = useRef<HTMLDivElement | null>(null);
  const secondPageRef = useRef<HTMLDivElement | null>(null);
  const thirdPageRef = useRef<HTMLDivElement | null>(null);
  const fourthPageRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ScrollToFirstPage = () => {
    if (firstPageRef.current) {
      console.log(firstPageRef.current.offsetTop)
      scroll.scrollTo(firstPageRef.current.offsetTop, {
        duration: 300,
        smooth: "smooth",
      });
    } else {
      scroll.scrollTo(0, {
        duration: 300,
        smooth: "smooth",
      });
    }
  };

  const ScrollToSecondPage = () => {
    if (secondPageRef.current) {
      scroll.scrollTo(secondPageRef.current.offsetTop, {
        duration: 300,
        smooth: "smooth",
      });
    }
  };
  
  const ScrollToThirdPage = () => {
    if (thirdPageRef.current) {
      scroll.scrollTo(thirdPageRef.current.offsetTop, {
        duration: 300,
        smooth: "smooth",
      });
    }
  };
  
  const ScrollToFourthdPage = () => {
    if (fourthPageRef.current) {
      scroll.scrollTo(fourthPageRef.current.offsetTop, {
        duration: 300,
        smooth: "smooth",
      });
    }
  };

  return (
    <MainContainer ref={firstPageRef}>
      <Header />
      <MainContent>
      <VideoBackground autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + "/videos/react-movies.mp4"} type="video/mp4" />
      </VideoBackground>
        <MainTitle>
          SEIMIN MUSIC FESTIVAL
        <MainSubTitle>JAZZ / ROCK / J-MUSIC</MainSubTitle>
        </MainTitle>
        <MainSection isScrolled={scrollPosition > 500 ? true : false}>
          <MainInfo isScrolled={scrollPosition > 500 ? true : false}>
            <ul>
              <li onClick={ScrollToFirstPage}>Home</li>
              <li onClick={ScrollToSecondPage}>Information</li>
              <li onClick={ScrollToThirdPage}>Programs</li>
              <li onClick={ScrollToFourthdPage}>Artist</li>
            </ul>
          </MainInfo>
        </MainSection>
      </MainContent>
      <SecondPage ref={secondPageRef}></SecondPage>
      <ThirdPage ref={thirdPageRef}></ThirdPage>
      <FourthPage ref={fourthPageRef}></FourthPage>
    </MainContainer>
  );
};

export default MainPage;
