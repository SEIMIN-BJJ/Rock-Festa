import React, { useState, useEffect, forwardRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import RedHotIMG from '../assets/images/red-hot-chili-peppers.jpeg';
import AskingIMG from "../assets/images/asking-alexandria.jpeg";
import CrossFaithIMG from "../assets/images/cross-faith.jpeg";
import FearAndIMG from "../assets/images/fear-and-loathing.webp";
import MaximumIMG from "../assets/images/maximum-the-hormone.webp";
import SheenaRingoIMG from "../assets/images/sheena-ringo.jpeg";
import SoilPimpIMG from "../assets/images/soil-pimp-sessons.jpeg";

const ThirdContent = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
  background-color: #fff;
`;

const ThirdSection = styled(motion.article)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ThirdTitle = styled(motion.h4)`
  width: 50%;
  height: 6rem;
  color: #000;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 3rem;
  letter-spacing: 2rem;
`;

const SliderContainer = styled(motion.div)`
  width: 60%;
`;

const SliderItem = styled(motion.div)<{ Images: string }>`
  width: 10%;
  height: 70vh;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.Images});
  border: 1px solid #000;
`;

const Arrow = styled.div`
  width: 100%;
  height: 70vh;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #000;
  font-size: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
`;

const images = [ 
  RedHotIMG,
  AskingIMG,
  CrossFaithIMG,
  FearAndIMG,
  MaximumIMG,
  SheenaRingoIMG,
  SoilPimpIMG,
];

const ThirdPage = forwardRef<HTMLDivElement>((props, ref) => {
  const [animate, setAnimate] = useState(false);

  const animationLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  const animationRight = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 1,
    delay: 0.2,
  };

  const transitionSlide = {
    duration: 1,
    delay: 0.3,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <Arrow></Arrow>,
    prevArrow: <Arrow></Arrow>,
  };


  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (window.innerWidth >= 768) {
      if (scrollPosition > 1200 && scrollPosition < 2200) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    } else {
      if (scrollPosition > 600) {
        setAnimate(false);
      } else {
        setAnimate(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <ThirdContent ref={ref}>
    <ThirdSection>
        <ThirdTitle
          variants={animationLeft}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          transition={transition}
        >
          ARTIST
        </ThirdTitle>
    <SliderContainer 
      ref={ref}
      variants={animationRight}
      initial="hidden"
      animate={animate ? 'visible' : 'hidden'}
      transition={transitionSlide}>

      <Slider {...settings}>
        {images.map((image, index) => (
          <SliderItem
            key={index}
            Images={image}
            variants={animationRight}
            initial="hidden"
            animate={animate ? 'visible' : 'hidden'}
            transition={transitionSlide} 
          />
        ))}
      </Slider>
    </SliderContainer>
    </ThirdSection>
  </ThirdContent>
  );
});

export default ThirdPage;
