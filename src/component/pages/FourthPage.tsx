import React, { useState, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'component/block/Modal/ModalVideo';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import RedHotIMG from '../assets/images/redhot.png';
import AskingIMG from '../assets/images/asking.png';
import CrossFaithIMG from '../assets/images/cross.png';
import FearAndIMG from '../assets/images/fear.png';
import MaximumIMG from '../assets/images/maximum.png';
import RingoIMG from '../assets/images/ringgo.png';
import SoilPimpIMG from '../assets/images/soil.png';
import '../../slick-theme.css';
import '../../slick.css';
import '../../App.scss';

const FourthContent = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
  background-color: #fff;
`;

const FourthSection = styled(motion.article)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;
`;

const FourthTitle = styled(motion.h4)`
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

const FourthSliderContainer = styled(motion.div)`
  width: 80%;
`;

const FourthImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: scale(1.1);
    z-index: 1;
    opacity: 1;
  }
`;

const FourthImageText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #000;
  padding: 1rem;
  letter-spacing: 0.05rem;
  text-align: center;
  opacity: 0.2;
  transition: opacity 0.3s ease-in-out;
  z-index: 2;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1.5rem;

  ${FourthImageWrapper}:hover & {
    opacity: 1;
    z-index: 2;
  }
`;

const FourthSliderItem = styled(motion.div)<{ Images: string }>`
  height: 20rem;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.Images});
  position: relative;
  margin: 0 0.3rem;
`;

const FourthCustomArrow = styled.div`
  width: 4rem;
  height: 3rem;
  font-size: 2rem;
  color: #000;
  cursor: pointer;
  transition: 0.21s ease-in-out;
  position: absolute;
  top: 0;
  transform: translateY(-150%);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  &:hover {
    opacity: 1;
    color: #ccc;
  }
`;

const images = [
  { img: RedHotIMG, text: 'RED HOT CHILI PEPPERS',videoId: 'U4H7O9toY9g' },
  { img: AskingIMG, text: 'ASKING ALEXANDRIA',videoId: '4AH54K4N87w' },
  { img: CrossFaithIMG, text: 'CROSS FAITH',videoId: 'PhmwDSYqAeE' },
  { img: FearAndIMG, text: 'FEAR AND LOATHING IN LASVEGAS',videoId: '29IATMmQKXE' },
  { img: MaximumIMG, text: 'MAXIMUM THE HORMONE',videoId: '5vFqVhkBIdI' },
  { img: RingoIMG, text: 'SHIINA RINGO',videoId: 'IZs1-CiqUj4' },
  { img: SoilPimpIMG, text: 'SOIL & PIMP SESSIONS',videoId: 'Jzt7feQTlxU' },

];

const FourthPage = forwardRef<HTMLDivElement>((props, ref) => {

  const [animate, setAnimate] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

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

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <FourthCustomArrow className="slick-prev" onClick={onClick}>
      <FaChevronLeft />
    </FourthCustomArrow>
  );

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <FourthCustomArrow className="slick-next" onClick={onClick}>
      <FaChevronRight />
    </FourthCustomArrow>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (window.innerWidth >= 768) {
      if (scrollPosition > 2400 && scrollPosition < 2800) {
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

  const fetchYouTubeVideo = async (videoId: string) => {
    const apiKey = 'AIzaSyCA5XtkodO7oPyYi6dDKi9pO8K1GLRJsIU';
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=player&id=${videoId}&key=${apiKey}`;
  
    try {
      const response = await axios.get(apiUrl);
      console.log('Video Info:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching YouTube video:', error);
      return null;
    }
  };
  

  const handleImageClick = async (videoId: string) => {
    const videoInfo = await fetchYouTubeVideo(videoId);

    if (videoInfo && videoInfo.items && videoInfo.items.length > 0 && videoInfo.items[0].player) {
      const videoUrl = videoInfo.items[0].player.embedHtml;
      setSelectedVideo(videoUrl);
      setModalOpen(true);
    } else {
      console.error('fuck');
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideo('');
  };
  return (
    <FourthContent ref={ref}>
      <FourthSection>
        <FourthTitle
          variants={animationLeft}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          transition={transition}
        >
          LIVE
        </FourthTitle>
        <FourthSliderContainer
          ref={ref}
          variants={animationRight}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          transition={transitionSlide}
        >
          <Slider {...settings}>
            {images.map((item, index) => (
              <FourthImageWrapper key={index} onClick={() => handleImageClick(item.videoId)}>
                <FourthSliderItem Images={item.img}>
                  <FourthImageText>{item.text}</FourthImageText>
                </FourthSliderItem>
              </FourthImageWrapper>
            ))}
          </Slider>
        </FourthSliderContainer>
      </FourthSection>
      {modalOpen && <Modal onClose={closeModal} videoUrl={selectedVideo} />}
    </FourthContent>
  );
});

export default FourthPage;
