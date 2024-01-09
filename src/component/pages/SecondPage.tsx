import React, { useState, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import FujiRockIMG from '../assets/images/maxresdefault.jpg'
import { motion } from "framer-motion";
import '../../App.scss';

const SecondContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;

  @media screen and (max-width: 768px) {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  flex-direction: column;
  }
`;

const SecondSection = styled(motion.article) `
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

`;

const SecondTitle = styled(motion.h4) `
    width: 100%;
    color:#000;
    font-size: 3rem;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    text-align: left;
    letter-spacing: 4px;
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 3rem;
    margin: 4rem 0 0 1rem;

    @media screen and (max-width: 768px) {
    font-size: 3rem;
    justify-content: flex-start;
    padding: 0rem 3rem; 
    margin: 1rem auto;
    z-index: 1;
    color: #fff;
}
`;

const SecondSubTitle = styled(motion.p) `
    width: 100%;
    color:#000;
    font-size: 0.8rem;
    font-family: 'Pretendard-Medium';
    text-align: left;
    padding: 3rem 3rem;
    margin: 4rem 0 0 1rem;
    margin-top: 0;
    
    @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0rem 2rem auto; 
    margin: 1rem auto;
    z-index: 1;
    color: #fff;

}
`;

const SecondImg = styled(motion.img) `
    width: 100%;
    height: 100%;
    background-image: url(${FujiRockIMG});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    filter: brightness(30%);
}
`;

const Information = [
  {

    rockTitle: (
        'SEIMIN MUSIC FESTIVAL'
    ),

    rockInformation: (
      <p>
          SEIMIN FESTIVAL은 본인이 좋아하는 밴드만을 골라서 만든 프로젝트로써 모일수가 없는 라인업이기에<br />모인다면 어디든 날아가겠다는 취지에서 제작을 하였다.<br /><br />
          컨셉은 락페스티벌이기 때문에 아티스트들의 MV를 소개함으로써 아티스트들의 영상과 장점을 부각하여 제작을 하였고<br /><br />
          인천 펜타포트, 일본 후지락 페스티벌, 영국의 글래스톤베리 페스티벌 등등 현존하는 페스티벌이 많기에 <br />가고 싶은 마음을 담아 이번 프로젝트를 채택하게 되었다.<br /><br />
          본인은 일본문화에 관심이 많고 음악은 어릴적 부터 밴드음악을 많이 듣고 자라다보니 밴드음악에 아이덴티티가 있다.<br />
          모든 종류의 음악을 듣지만 특히 일본밴드 및 일본재즈, 시부야케이 또는 많은 세계 각국의 메탈밴드 및 <br />그들의 종류 음악을 많이 듣는편이고 대중적이지 않은 밴드들이 많이 알고 있는데
          이들을 알리고 싶다는 생각을 종종 하곤 했었다.<br /><br />
          트렌디한 아티스트들 보다는 개성적인 아티스트를 더 좋아하다보니 자료를 모아놓고도 <br />사람들은 이해를 못하긴 하겠다라는 생각을 했었다.<br /><br />
          하지만 어쩔 수 없다.<br /><br />이번에 만든 프로젝트는 내가 좋아하는 것을 만들고 싶었기 때문에 본인이 즐겁기 위해서 만든 프로젝트이다.<br /><br />
          더군다나 2006년 펜타포트 이후로 락페스티벌을 간적이 없어서 시간이 나고 여유가 되면 락페스티벌을 가서 <br />이 한몸 불사지르겠다는 다짐으로 제작한 이유도 있다.
      </p>
    ),


  },
];
const SecondPage = forwardRef<HTMLDivElement>((props, ref) => {

  const [animate, setAnimate] = useState(false);

  const animationRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const animationUp = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 1,
    delay: 0.1,
  };

  const transitionSecond = {
    duration: 1,
    delay: 1,
  };
  const transitionText = {
    duration: 1,
    delay: 1.5,
  };

  const transitionIMG = {
    duration: 1,
    delay: 0.2,
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition)
  
    if (window.innerWidth >= 768) {
      // 웹페이지 스크롤
      if (scrollPosition > 400 && scrollPosition < 1200) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    } else {
      // 모바일 스크롤
      if (scrollPosition > 200 && scrollPosition < 1200) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []); 

  return (
    <SecondContent ref={ref}>
      <SecondSection           
          variants={animationRight}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}>

        {Information.map((item, index) => (
        <SecondTitle
        variants={animationRight}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        transition={transitionSecond}>
          {item.rockTitle}
        </SecondTitle>
        ))}
        {Information.map((item, index) => (
        <SecondSubTitle
        variants={animationRight}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        transition={transitionText}>
          {item.rockInformation}
        </SecondSubTitle>
        ))};
      </SecondSection>
        <SecondImg
          variants={animationUp}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transitionIMG} />
    </SecondContent>
  );
});

export default SecondPage;