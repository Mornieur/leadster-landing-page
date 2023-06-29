import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  img {
    object-fit: contain;
  }
`;

export const MinText = styled.span`
  color: var(--leadster-color);
  font-size: 1.2rem;
  padding: 1rem;
  border: 2px solid var(--leadster-color);
  border-radius: 1rem 1rem 1rem 0;
`;

export const MinTitle = styled.span`
  padding: 0.5rem;
  font-size: 4rem;
`;

export const MaxTitle = styled.h1`
  padding: 0.5rem;
  font-size: 6rem;
  color: var(--leadster-color);
  position: relative;
  border-bottom: 1px solid grey;

  @media (max-width: 810px) {
    font-size: 4rem;
  }

  .minLogo {
    position: absolute;
    top: 0.7rem;
    right: -0.5rem;

    @media (max-width: 810px) {
      right: -0.3rem;
      top: 0.4rem;
      width: 2rem;
    }

    @media (max-width: 550px) {
      display: none;
    }
  }
`;

export const TitleComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 1rem;

  p {
    padding: 1rem;
    font-weight: 500;
  }
`;

export const StyledText = styled.span<{ bold?: boolean }>`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  padding: 1rem;
`;
