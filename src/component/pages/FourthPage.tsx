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
  
  @media screen and (max-width: 768px) {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  flex-direction: column;
  }
`;

const FourthSection = styled(motion.article)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  flex-direction: column;
  }
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

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
    margin: 0 0 0 2rem;
}
`;

const FourthSliderContainer = styled(motion.div)`
  width: 80%;
`;

const FourthImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-out;

  @media screen and (max-width: 768px) {
    height: 40vh;
}

  &:hover {
    transform: scale(1.1);
    opacity: 1;
    z-index: 999;

    @media screen and (max-width: 768px) {
    transform: none;
}
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
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
    opacity: 1;
    margin-bottom: -2rem;
}

  ${FourthImageWrapper}:hover & {
    opacity: 1;
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

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 30vh;
    margin: 0 auto;
    padding: 0 auto;
    background-size: contain;
}
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
  { img: RedHotIMG, text: 'RED HOT CHILI PEPPERS' },
  { img: AskingIMG, text: 'ASKING ALEXANDRIA' },
  { img: CrossFaithIMG, text: 'CROSS FAITH' },
  { img: FearAndIMG, text: 'FEAR AND LOATHING IN LASVEGAS' },
  { img: MaximumIMG, text: 'MAXIMUM THE HORMONE' },
  { img: RingoIMG, text: 'SHIINA RINGO' },
  { img: SoilPimpIMG, text: 'SOIL & PIMP SESSIONS'},

];

const artists = [
  {
    name: 'RED HOT CHILI PEPPERS',
    videoIds: ['U4H7O9toY9g', 't5ht7o5r4iQ', 'F23e9aSugL8','8DyziWtkfBw','Sb5aq5HcS1A'],
    img: RedHotIMG,
  },
  {
    name: 'ASKING ALEXANDRIA',
    videoIds: ['4AH54K4N87w', 'pFZSI-RX4YA', '4SRB7Fsq3fQ','VX0Bu_klgvo','tQblSS2kl4Q'],
    img: AskingIMG,
  },

  {
    name: 'CROSS FAITH',
    videoIds: ['PhmwDSYqAeE', 'fVB0XINLj-w', 'ZxSx2WHA_0E','cGJfO3P4s04','4_8-wfZkI0Q','BT4env-Tw2o'],
    img: CrossFaithIMG,
  },

  {
    name: 'FEAR AND LOATHING IN LASVEGAS',
    videoIds: ['D-SQqppuGvc', '2k55xXm0ido', 'KdYms5pRwS4','xKJrRuVASfs','9kXOPLZ-Hj4'],
    img: FearAndIMG,
  },

  {
    name: 'MAXIMUM THE HORMONE',
    videoIds: ['MmfUyyUL07A', 'IC-wDpwzEt4', 'm77ykMf6bM0','5vFqVhkBIdI','beN5ep5MrdY'],
    img: MaximumIMG,
  },

  {
    name: 'SHIINA RINGO',
    videoIds: ['glwPBMfaiII', 'glwPBMfaiII', 'fVnzXBTde-0','6nhS9bqqgv0','diP0bYi9kZk','T99Ng11MPdY','DwnSQxD2VRI','eScTTi8UtiY','ViqPBSUt59g'],
    img: MaximumIMG,
  },

  {
    name: 'SOIL & PIMP SESSIONS',
    videoIds: ['Jzt7feQTlxU', 'LOtO_TxQ6iM', 'B4XMRovROsg','0ndbVoFFfkQ','ouHdskl0gqY'],
    img: MaximumIMG,
  },
];

const FourthPage = forwardRef<HTMLDivElement>((props, ref) => {

  const [animate, setAnimate] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const animationLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  // const animationRight = {
  //   hidden: { opacity: 0, x: 200 },
  //   visible: { opacity: 1, x: 0 },
  // };

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
    slidesToShow: 3, // 웹에서는 3개씩 보여주기
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 모바일에서는 1개씩 보여주기
        },
      },
    ],
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
      if (scrollPosition > 2000 && scrollPosition < 10000) {
        setAnimate(true);
      } else {
        setAnimate(false);
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
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=player&id=${videoId}&key=${apiKey}`;
  
    try {
      const response = await axios.get(apiUrl);
      console.log('유튜브 정보:', response.data);
      return response.data;
    } catch (error) {
      console.error('유튜브 에러:', error);
      return null;
    }
  };
  

  const handleImageClick = async (artistName: string) => {
    const artist = artists.find((a) => a.name === artistName);
  
    if (artist && artist.videoIds.length > 0) {
      const randomVideoId = artist.videoIds[Math.floor(Math.random() * artist.videoIds.length)];
      const videoInfo = await fetchYouTubeVideo(randomVideoId);
  
      if (videoInfo && videoInfo.items && videoInfo.items.length > 0 && videoInfo.items[0].player) {
        const videoUrl = videoInfo.items[0].player.embedHtml;
        setSelectedVideo(videoUrl);
        setModalOpen(true); 
      }
    }
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [modalOpen]);

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
          variants={animationLeft}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          transition={transitionSlide}
        >
          <Slider {...settings}>
            {images.map((item, index) => (
              <FourthImageWrapper key={index} onClick={() => handleImageClick(item.text)}>
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
