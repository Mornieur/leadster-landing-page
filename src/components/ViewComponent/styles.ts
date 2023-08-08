import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;

  .buttonsMenu {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Menu = styled.div`
  display: flex;
  max-width: 1150px;
  width: 100%;
  height: 100%;
  padding: 1rem;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 400px) {
    gap: 0.5rem;
  }
`;

export const Button = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 1.2rem;
  text-decoration: none;
  border: 2px solid grey;
  background-color: #fff;
  font-size: 1.2rem;
  max-width: 300px;
  width: 100%;
  font-size: 0.9rem;
  /* height: 100%; */

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap;

  ${({ active }) =>
    active &&
    css`
      background-color: var(--leadster-color);
      color: #fff;
      border: none;
    `}

  @media (max-width: 1060px) {
    font-size: 0.7rem;
    white-space: normal;
  }

  @media (max-width: 400px) {
    padding: 0.5rem;
  }

  &:hover {
    border-color: var(--leadster-color);
    color: var(--leadster-color);

    ${({ active }) =>
      active &&
      css`
        color: #fff;
      `}
  }
`;

export const OrderList = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: center;
  max-width: 450px;
  height: 50px;
  width: 100%;

  @media (max-width: 900px) {
    display: none;
  }

  p {
    padding: 1rem 0.5rem;
    font-weight: 600;
    white-space: nowrap;

    @media (max-width: 900px) {
      display: none;
    }
  }

  .menu {
    max-width: 300px;
    width: 100%;
    white-space: nowrap;
  }
  button {
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    @media (max-width: 800px) {
      font-size: 0.7rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    z-index: 999;
    background-color: #fff;
    width: 100%;

    @media (max-width: 880px) {
      width: 100px;
      position: relative;
    }
  }
  li {
    display: block;
    width: 100%;
    cursor: pointer;
    border-radius: 0.7rem;

    :hover {
      background-color: #dadada;
    }
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 10px;
  }
`;
