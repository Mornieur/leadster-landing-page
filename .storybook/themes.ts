export const lightTheme = {
  colors: {
    background: '#ffffff',
    text: '#333333',
    primary: '#6200ee',
    secondary: '#03dac6',
    error: '#b00020',
    surface: '#ffffff',
  },
  // Adicione mais estilos específicos do tema light, se necessário
};

export const darkTheme = {
  colors: {
    background: '#121212',
    text: '#ffffff',
    primary: '#bb86fc',
    secondary: '#03dac6',
    error: '#cf6679',
    surface: '#121212',
  },
  // Adicione mais estilos específicos do tema dark, se necessário
};

export const customViewports = {
  MOBILE: {
    name: 'Cellphone Example',
    styles: {
      width: '415px',
      height: '915px',
    },
  },
  IPAD: {
    name: 'iPad Example',
    styles: {
      width: '810px',
      height: '1080px',
    },
  },
  DESKTOP: {
    name: 'Desktop Example',
    styles: {
      width: '1300px',
      height: '1080px',
    },
  },
};

export const globalTranslate = [
  { value: 'en', right: '🇺🇸', title: 'English' },
  { value: 'fr', right: '🇫🇷', title: 'Français' },
  { value: 'es', right: '🇪🇸', title: 'Español' },
  { value: 'zh', right: '🇨🇳', title: '中文' },
  { value: 'kr', right: '🇰🇷', title: '한국어' },
];

import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const themeBtnTest = {
  primary: {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--white-color)',
    border: 'var(--primary-color)',
  },
  secondary: {
    backgroundColor: 'var(--white-color)',
    color: 'var(--primary-color)',
    border: 'var(--primary-color)',
  },
  save: {
    backgroundColor: 'var(--saved-color)',
    color: 'var(--white-color)',
    border: 'var(--saved-color)',
  },
  edit: {
    backgroundColor: 'var(--edit-color)',
    color: 'var(--white-color)',
    border: 'var(--edit-color)',
  },
  delete: {
    backgroundColor: 'var(--delete-color)',
    color: 'var(--white-color)',
    border: 'var(--delete-color)',
  },
};

export const globalViewports = {
  mobileS: {
    name: 'Mobile S',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  mobileM: {
    name: 'Mobile M',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  mobileL: {
    name: 'Mobile L',
    styles: {
      width: '425px',
      height: '812px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
};
