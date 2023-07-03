import styled from 'styled-components';

interface ModalProps {
  closeModal?: boolean;
  maxWidth: string;
  maxHeight: string;
}

export const Container = styled.div<ModalProps>`
  z-index: 999;
  background-color: #fff;
  position: fixed;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '35rem')};
  width: 100%;
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '37rem')};
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
  opacity: 1;
  border-top: 0.5rem solid var(--leadster-color);

  @media (max-width: 400px) {
    width: 2rem;
  }
  .title {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1rem 0 1rem 0;
    color: var(--blue-dark);
  }
  p {
    color: #696969;
  }

  .closeModal {
    background-color: #ff5353;
    max-width: 7rem;
    width: 100%;
    height: 0;
    padding: 1rem;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
  }

  .submitImage {
    max-width: 7rem;
    width: 100%;
    height: 0;
    padding: 1rem;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
  }

  .buttonsDiv {
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: right;
    span {
      width: 300px;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .cancel {
        background-color: #ff5353;
      }
    }
  }
`;

export const ContainerMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  overflow: hidden !important;
`;
