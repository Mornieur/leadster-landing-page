import styled, { css } from 'styled-components';

interface ContainerProps {
  isOpen?: boolean;
}

export const ContainerMain = styled.div<ContainerProps>`
  ${({ isOpen }) =>
    isOpen &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9999;
    `};
`;

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center;
  align-items: center;
  padding: 0 5rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PlayIcon = styled.div`
  position: absolute;
  width: 8rem;
  height: 8rem;
  opacity: 0;
`;

export const VideoCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: transform 0.3s ease-out;
  max-width: 400px;
  width: 100%;
  border-radius: 1rem;

  &:hover {
    transform: translateY(-10px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(44, 131, 251, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 1rem;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover ${PlayIcon} {
    opacity: 1;
  }
`;

export const VideoPreview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
`;

export const Description = styled.p`
  padding: 1rem 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #353453;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }
  @media (max-width: 800px) {
    font-size: 0.8rem;
  }

  &:hover {
    color: var(--leadster-color);
  }
`;
