import React from 'react';
import * as S from '../styles';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

const socialMediaLinks = [
  {
    id: 1,
    logo: FaLinkedinIn,
    size: '1.5rem',
    color: '#92979e',
    url: 'https://www.linkedin.com/company/leadster-platform/',
  },
  {
    id: 2,
    logo: FaFacebookF,
    size: '1.5rem',
    color: '#92979e',
    url: 'https://www.facebook.com/leadsterplatform',
  },
  {
    id: 3,
    logo: FaInstagram,
    size: '1.5rem',
    color: '#92979e',
    url: 'https://www.instagram.com/leadster.com.br/',
  },
];

const SocialMediaLinks = () => {
  return (
    <S.SocialMedia>
      {socialMediaLinks.map((link) => (
        <S.SocialMediaLink key={link.id}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {React.createElement(link.logo, {
              size: link.size,
              color: link.color,
            })}
          </a>
        </S.SocialMediaLink>
      ))}
    </S.SocialMedia>
  );
};

export default SocialMediaLinks;
