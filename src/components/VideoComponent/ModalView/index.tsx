import { useState } from 'react';
import { Modal } from '../../UI/Modal';
import * as S from './styles';
import { AiOutlineClose, AiOutlineCloudDownload } from 'react-icons/ai';
import ReactPlayer from 'react-player';

interface ModalViewProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  videoData: { link: string; description: string } | null;
}

export const ModalView = ({
  isOpen = false,
  setIsOpen,
  videoData,
}: ModalViewProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <S.Container>
      <Modal maxWidth="30rem" isOpen={isOpen}>
        <S.CloseIcon
          data-testid="modal-close-icon"
          onClick={() => setIsOpen(false)}
        >
          <AiOutlineClose />
        </S.CloseIcon>
        <S.Content>
          <S.Title>
            <p>{videoData?.description}</p>
          </S.Title>
          <S.Video>
            <ReactPlayer
              controls={true}
              url={videoData?.link}
              playing={isPlaying}
              loop
              muted
              width={'100%'}
              height={'100%'}
            />
          </S.Video>
          <S.Description>
            <p>Descrição</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
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
