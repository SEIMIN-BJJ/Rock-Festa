import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import Header from "component/block/Header/header";
import SecondPage from './SecondPage';
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import "../../App.scss";

interface MainInfoProps {
  isScrolled: boolean;
}

interface MainSectionProps {
  isScrollSection: boolean;
}

const MainContainer = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    overflow-x: hidden;
  }
`;

const MainContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;

@media screen and (max-width: 768px) {
  width: 100%;
  height: 100vh;
}
`;

const VideoBackground = styled.video`
  width: 100vw;
  height: 100%;
  object-fit: cover;
  position: absolute;

  @media screen and (max-width: 768px) {
  width: 100%;
  height: 100vh;
}
`;

const MainTitle = styled(motion.div)`
  width: 80%;
  height: auto;
  position: absolute;
  font-size: 5rem;
  color: #ffffffcc;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  opacity: 0.8;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

const MainSubTitle = styled(motion.div)`
  width: 70%;
  height: auto;
  font-size: 2rem;
  color: #ffffffcc;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 0.4rem;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

const MainSection = styled.article<MainSectionProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isScrollSection }) => (isScrollSection ? "#000" : "transparent")};

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin: 1rem auto;
}
`;

const MainInfo = styled.div<MainInfoProps> `
  width: 100%;
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: ${({ isScrolled }) => (isScrolled ? "0" : "auto")};
  background-color: ${({ isScrolled }) => (isScrolled ? "#fff" : "#000")};
  color: ${({ isScrolled }) => (isScrolled ? "#000" : "#fff")};
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  transition: transform 0.3s ease-in-out;
  transition: 0.21s ease-in-out;
  z-index: 3;

  &.hidden {
    transform: translateY(-100%);
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    color: ${({ isScrolled }) => (isScrolled ? "#000" : "#fff")};

    li {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      transition: 0.21s ease-in-out;
      cursor: pointer;

      &:hover {

        color:#ccc;
      }

      @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      margin: 2rem auto;
      text-align: center;

}
      }
    }
`;

const MainPage = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const firstPageRef = useRef<HTMLDivElement | null>(null);
  const secondPageRef = useRef<HTMLDivElement | null>(null);
  const thirdPageRef = useRef<HTMLDivElement | null>(null);
  const fourthPageRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  const animationUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 1,
    delay: 0.3,
  };

  const transitionSecond = {
    duration: 1,
    delay: 0.5,
  };

  const TextScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
  
    if (window.innerWidth >= 768) {
      // 웹페이지 스크롤
      if (scrollPosition > 0) {
        setAnimate(false);
      } else {
        setAnimate(true);
      }
    } else {
      // 모바일 스크롤
      if (scrollPosition > 600) {
        setAnimate(false);
      } else {
        setAnimate(true);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", TextScroll);
  
    return () => {
      window.removeEventListener("scroll", TextScroll);
    };
  }, [TextScroll]);
  
  useEffect(() => {
    TextScroll();
  }, [TextScroll]);

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
    scroll.scrollTo(secondPageRef.current!.offsetTop, {
      duration: 300,
      smooth: "smooth",
    });
  };

  const ScrollToThirdPage = () => {
    scroll.scrollTo(thirdPageRef.current!.offsetTop, {
      duration: 300,
      smooth: "smooth",
    });
  };

  const ScrollToFourthPage = () => {
    scroll.scrollTo(fourthPageRef.current!.offsetTop, {
      duration: 300,
      smooth: "smooth",
    });
  };

  return (
    <MainContainer ref={firstPageRef}>
      <Header />
      <MainContent>
      <VideoBackground autoPlay loop muted playsInline>
        <source src={process.env.PUBLIC_URL + "/videos/react-movies.mp4"} type="video/mp4" />
      </VideoBackground>
        <MainTitle
          variants={animationUp}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}>
          SEIMIN MUSIC FESTIVAL
          <MainSubTitle
            variants={animationUp}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            transition={transitionSecond}>
              JAZZ / ROCK / J-MUSIC
          </MainSubTitle>
        </MainTitle>
        <MainSection isScrollSection={scrollPosition > 500 ? true : false}>
          <MainInfo isScrolled={scrollPosition > 500 ? true : false}>
            <ul>
              <li onClick={ScrollToFirstPage}>HOME</li>
              <li onClick={ScrollToSecondPage}>INFO</li>
              <li onClick={ScrollToThirdPage}>ARTIST</li>
              <li onClick={ScrollToFourthPage}>LIVE</li>
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
