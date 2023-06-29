import { useEffect, useState } from 'react';
import { Modal } from '../../UI/Modal';
import * as S from './styles';
import { AiOutlineClose, AiOutlineCloudDownload } from 'react-icons/ai';
import ReactPlayer from 'react-player';

interface ModalViewProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ModalView = ({ isOpen = false, setIsOpen }: ModalViewProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <S.Container>
      <Modal maxWidth="28rem" isOpen={isOpen}>
        <S.CloseIcon onClick={() => setIsOpen(false)}>
          <AiOutlineClose />
        </S.CloseIcon>
        <S.Content>
          <S.Title>
            <p className="webnar">Webnar:</p>
            <p>Como aumentar sua Geração de Leads feat. Traktor</p>
          </S.Title>
          <S.Video>
            {/* <video loop muted playsInline className="videoDisplay">
              <source src="/video/video-example.mp4" width={100} height={100} />
            </video> */}
            <ReactPlayer
              controls={true}
              url="https://www.youtube.com/watch?v=XIBdJjahUkM"
              playing={isPlaying}
              loop
              muted
              width={'100%'}
              height={'100%'}
            />
            {/* <button onClick={handlePlayPause}>
              {isPlaying ? 'Pause' : 'Play'}
            </button> */}
          </S.Video>
          <S.Description>
            <p>Descrição</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p>Download</p>
          </S.Description>
          <S.FooterButtons>
            <S.DownloadButtons>
              <AiOutlineCloudDownload /> Spreadsheet.xls
            </S.DownloadButtons>
            <S.DownloadButtons>
              <AiOutlineCloudDownload /> Document.doc
            </S.DownloadButtons>
            <S.DownloadButtons>
              <AiOutlineCloudDownload /> Presentation.ppt
            </S.DownloadButtons>
          </S.FooterButtons>
        </S.Content>
      </Modal>
    </S.Container>
  );
};
