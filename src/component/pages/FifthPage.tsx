import React, { forwardRef, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import ModalPhoto from 'component/block/Modal/ModalPhoto';

interface UnsplashPhoto {
  urls: {
    regular: string;
  };
}

const FifthContent = styled.section`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: auto;
    overflow-x: hidden;
    flex-direction: column;
  }
`;

const FifthSection = styled(motion.article)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: auto;
    overflow-x: hidden;
    flex-direction: column;
    margin-top: 5rem;

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
  height: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
    padding: 1rem;
  }
`;

const Fifthitem = styled(motion.ul)`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
  }

  li {
    width: 100%; 
    max-width: 30rem; 
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem auto;
    border: 1px solid #fff;

    @media screen and (max-width: 768px) {
    width: 100%;
  }

    img {
      width: 100%; 
      height: 100%;
      object-fit: cover;
      transition: 0.21s ease-in-out;
      cursor: pointer;
      filter: brightness(70%);


    &:hover {
    transform: scale(1.1);
    opacity: 1;
    filter: brightness(100%);

  }
    }
  }
`;

const FifthPage = forwardRef<HTMLDivElement>((props, ref) => {
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');

  const fetchPhotos = useCallback(async (pageNum: number) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=rock%20festival&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=${pageNum}`
      );
      const photoData: UnsplashPhoto[] = response.data.results;
      setPhotos((prevPhotos) => [...prevPhotos, ...photoData]);
      setPage(pageNum);
    } catch (error) {
      console.error('사진:', error);
    }
  }, []);

  const openModal = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchPhotos(page + 1);
    }
  }, [fetchPhotos, page]);

  useEffect(() => {
    fetchPhotos(page);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchPhotos, handleScroll, page]);

  return (
    <FifthContent ref={ref}>
      <FifthSection>
        <FifthTitle>PHOTO</FifthTitle>
        <FifthPhotoContainer>
          <Fifthitem>
            {photos.map((photo, index) => (
              <li key={index}>
                <img
                  src={photo.urls.regular}
                  alt={`${index + 1}`}
                  onClick={() => openModal(photo.urls.regular)}
                />
              </li>
            ))}
          </Fifthitem>
        </FifthPhotoContainer>
      </FifthSection>
      {modalOpen && (
        <ModalPhoto imageUrl={selectedImageUrl} closeModal={closeModal} modalOpen={modalOpen} />
      )}
    </FifthContent>
  );
});

export default FifthPage;