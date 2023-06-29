import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 3rem;

  p {
    opacity: 0.3;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  column-gap: 30px;
  max-height: 500px;
  height: 100%;

  padding: 5rem 0 2rem 0;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    padding: 2rem 0 2rem 0;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0.5rem 1rem;

    max-width: 250px;
    width: 100%;
    max-height: 100px;
    height: 100%;
    flex: 1;

    @media (max-width: 1000px) {
      padding: 0.5rem 0.5rem;
      align-items: flex-start;
      text-align: start;
      justify-content: flex-start;
    }

    strong {
      padding-top: 2rem;
      padding-bottom: 0.9rem;
      width: 100%;

      @media (max-width: 1000px) {
        font-size: 0.7rem;
        padding-bottom: 0.2rem;
      }
    }

    p {
      padding: 0.5rem 0;

      @media (max-width: 1000px) {
        font-size: 0.5rem;
        padding: 0.1rem 0;
      }
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      @media (max-width: 900px) {
        font-size: 0.5rem;
      }
    }
  }
`;

export const SocialMedia = styled.div`
  max-width: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  gap: 1rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #d7dce3;
    width: 3rem;
    height: 3rem;

    @media (max-width: 1000px) {
      svg:nth-child(1) {
        width: 1.2rem;
        height: 1.2rem;
        size: 1rem;
      }

      width: 2rem;
      height: 2rem;
    }
  }
`;

export const LeadsterLogo = styled.header`
  width: 100%;
  position: absolute;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  height: 70px;
  top: 0;
  padding: 1rem 0 5rem 0;

  p {
    width: 100%;
    padding: 0.5rem 0 2rem 0;
    display: flex;
    justify-content: center;

    @media (max-width: 800px) {
      font-size: 0.5rem;
    }
  }

  img {
    object-fit: contain;

    @media (max-width: 600px) {
      width: 150px;
      height: 150px;
    }
  }
`;

export const SocialMediaLink = styled.div`
  display: flex;
`;

export const Copywriting = styled.div`
  position: absolute;
  bottom: -1rem;
  width: 100%;

  .copyDescription {
    display: flex;
  }

  .leadster-text {
    color: var(--leadster-color);
    padding-left: 4px;
    font-weight: 600;
  }

  .copyright {
    font-weight: 600;
  }

  main {
    border-top: 1px solid #92979e;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    padding: 0.5rem 0;
    p {
      font-size: 0.7rem;
    }
  }
`;
