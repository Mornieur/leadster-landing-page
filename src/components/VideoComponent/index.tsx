import * as S from './styles';
import videos from './data.json';
import { useEffect, useState } from 'react';
import { ModalView } from './ModalView';
import { BsFillPlayFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useVideoStore } from '@/store';
import { VideoCategory } from '@/pages';

interface Video {
  id: number;
  title: string;
  alt: string;
  link: string;
  image: string;
  category: string;
  createdAt: string;
}

export const VideoComponent = () => {
  const [modalData, setModalData] = useState<{
    link: string;
    description: string;
  } | null>(null);
  const { orderBy, category } = useVideoStore();

  useEffect(() => {
    document.body.style.overflow = modalData ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalData]);

  const openModal = (videoLink: string, videoDescription: string) => {
    setModalData({ link: videoLink, description: videoDescription });
  };

  const closeModal = () => {
    setModalData(null);
  };

  const sortListByDate = () => {
    return videos.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      const crescent = orderBy === 'Mais Recente';

      return crescent ? dateA - dateB : dateB - dateA;
    });
  };

  const filterVideosByCategory = (videos: Video[], category: VideoCategory) => {
    if (category === null) {
      return videos;
    }
    return videos.filter((video) => video.category === category);
  };

  const sortedAndFilteredVideos = sortListByDate();
  const filteredVideos = filterVideosByCategory(
    sortedAndFilteredVideos,
    category
  );

  return (
    <>
      {modalData && (
        <ModalView
          setIsOpen={closeModal}
          isOpen={!!modalData}
          videoData={modalData}
        />
      )}
      <S.Container isOpen={!!modalData}>
        {filteredVideos.map((video, index) => (
          <motion.div
            key={index}
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
              key={index}
              onClick={() => openModal(video.link, video.title)}
              data-testid={`video-card-${index}`}
            >
              <S.PlayIcon>
                <BsFillPlayFill size={'8rem'} color="#fff" />
              </S.PlayIcon>
              <S.VideoPreview>
                <S.ThumbnailImage
                  src={video.image}
                  alt={video.alt}
                  data-testid={`thumbnail-${index}`}
                />
                <S.Description data-testid={`video-title-${index}`}>
                  {video.title}
                </S.Description>
              </S.VideoPreview>
            </S.VideoCard>
          </motion.div>
        ))}
      </S.Container>
    </>
  );
};
