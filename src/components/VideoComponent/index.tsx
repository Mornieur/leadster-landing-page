import * as S from './styles';
import ThumbnailImage from '../../assets/images/thumbnail.png';
import videos from './data.json';
import { useEffect, useState } from 'react';
import { ModalView } from './ModalView';
import { BsFillPlayFill } from 'react-icons/bs';

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
        {videos.map((video) => (
          <S.VideoCard key={video.id} onClick={openModal}>
            <S.PlayIcon>
              <BsFillPlayFill size={'8rem'} color="#fff" />
            </S.PlayIcon>
            <S.VideoPreview>
              <S.ThumbnailImage
                src={ThumbnailImage.src}
                alt="Thumbnail"
                height={300}
              />
              <S.Description>{video.title}</S.Description>
            </S.VideoPreview>
          </S.VideoCard>
        ))}
      </S.Container>
    </>
  );
};
