import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #eaf3ff;
  padding: 1rem;
  width: 100%;
  margin: 3rem 0;
  img {
    object-fit: contain;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const Graphic = styled.div`
  display: flex;
  justify-content: center;

  img {
    @media (max-width: 800px) {
      width: 350px;
      height: 350px;
    }
    @media (max-width: 750px) {
      width: 250px;
      height: 250px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 550px;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 2.5rem;
  padding: 0.5rem 0;
  max-width: 500px;
  width: 100%;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
  strong {
    font-weight: bold;
  }
`;

export const Information = styled.p`
  font-size: 1.2rem;
  border-bottom: 1px solid grey;
  padding-bottom: 1.5rem;
  strong {
    font-weight: bold;
  }
`;

export const Demonstration = styled.article`
  display: flex;

  align-items: center;
  gap: 1rem;
  max-height: 100px;
  height: 100%;

  img {
    max-width: 150px;
    width: 100%;
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  padding: 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: var(--leadster-color);
  text-decoration: none;
  border: none;
  border-radius: 1.7rem;
  max-width: 200px;
  width: 100%;

  @media (max-width: 650px) {
    font-size: 0.5rem;
  }
`;

export const MoreInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.5rem;
  max-height: 50px;
  height: 100%;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  @media (max-width: 630px) {
    font-size: 0.7rem;
    gap: 0.5rem;
  }

  .stars {
    @media (max-width: 700px) {
      width: 70px;
    }
  }
`;
