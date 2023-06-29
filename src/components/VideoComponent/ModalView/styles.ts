import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 1rem 0;
`;

export const Title = styled.span`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  padding: 1rem 2.2rem;
  gap: 0.5rem;
  font-weight: 600;

  .webnar {
    color: var(--leadster-color);
  }
`;

export const Content = styled.main`
  width: 100%;
  height: 100%;

  .videoDisplay {
    width: 100%;
  }
`;

export const Video = styled.div`
  width: 100%;
  height: 200px;
`;

export const Description = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem 10px;
    border-bottom: 1px solid grey;
    font-style: bold;

    @media (max-width: 400px) {
      font-size: 0.8rem;
      &:nth-child(2) {
        text-align: center;
      }
    }
  }

  p:nth-child(2) {
    font-weight: normal;
    padding: none;
  }
`;

export const CloseIcon = styled.aside`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export const FooterButtons = styled.footer`
  display: flex;
  padding: 0.5rem;
  gap: 1rem;

  max-width: 450px;
  width: 100%;
`;

export const DownloadButtons = styled.div`
  font-size: 0.9rem;
  padding: 5px 3px;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;

  @media (max-width: 400px) {
    width: 100px;
  }

  :nth-child(1) {
    background-color: #99d791;
    color: #61a05a;
  }
  :nth-child(2) {
    background-color: #79b1ff;
    color: var(--leadster-color);
  }
  :nth-child(3) {
    background-color: #fff78e;
    color: #f5df00;
  }
`;
