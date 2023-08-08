import * as S from './styles';
import ThumbnailImage from '../../assets/images/thumbnail.png';
import videos from './data.json';
import { useEffect, useState } from 'react';
import { ModalView } from './ModalView';
import { BsFillPlayFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

export const VideoComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <ModalView setIsOpen={() => closeModal()} isOpen={isModalOpen} />
      )}
      <S.Container isOpen={isModalOpen}>
        {videos.map((video, index) => (
          <>
            <motion.div
              className="videoGroup"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <S.VideoCard
                key={video.id}
                onClick={openModal}
                data-testid={`video-card-${index}`}
              >
                <S.PlayIcon>
                  <BsFillPlayFill size={'8rem'} color="#fff" />
                </S.PlayIcon>
                <S.VideoPreview>
                  <S.ThumbnailImage
                    src={ThumbnailImage.src}
                    alt={video.alt}
                    height={300}
                    data-testid={`thumbnail-${index}`}
                  />
                  <S.Description data-testid={`video-title-${index}`}>
                    {video.title}
                  </S.Description>
                </S.VideoPreview>
              </S.VideoCard>
            </motion.div>
          </>
        ))}
      </S.Container>
    </>
  );
};
