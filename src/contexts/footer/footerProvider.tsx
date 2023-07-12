import React, { ReactNode, createContext } from 'react';
import FooterContext from './footerContext';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

const SocialMediaLinks = [
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

const FooterProvider = ({ children }: { children: ReactNode }) => {
  const footerLinks = {
    mainLinks: ['Home', 'Ferramenta', 'Preços', 'Contato'],
    casesLinks: [
      'Geração de Leads B2B',
      'Geração de Leads em Software',
      'Geração de Leads em Imobiliária',
      'Cases de Sucesso',
    ],
    materialsLinks: [
      'Blog',
      'Parceria com Agências',
      'Guia Definitivo do Marketing',
      'Materiais',
    ],
    contactInfo: {
      socialMediaLinks: SocialMediaLinks,
      email: 'contato@leadster.com.br',
      telefone: '(42) 98828-9851',
    },
  };

  return (
    <FooterContext.Provider value={footerLinks}>
      {children}
    </FooterContext.Provider>
  );
};

export default FooterProvider;
