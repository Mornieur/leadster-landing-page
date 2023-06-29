import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import Logo from '../../assets/images/logo.png';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

const SocialMediaLinks = [
  {
    id: 1,
    alt: 'linkedIn',
    logo: FaLinkedinIn,
    size: '1.5rem',
    color: '#92979e',
    url: 'https://www.linkedin.com/company/leadster-platform/',
  },
  {
    id: 2,
    alt: 'facebook',
    logo: FaFacebookF,
    size: '1.5rem',
    color: '#92979e',
    url: 'https://www.facebook.com/leadsterplatform',
  },
  {
    id: 3,
    alt: 'instagram',
    logo: FaInstagram,
    size: '1.5rem',
    color: '#92979e',
    url: 'https://www.instagram.com/leadster.com.br/',
  },
];

export const Footer = () => {
  return (
    <S.Container className="footer-container">
      <S.LeadsterLogo>
        <Image src={Logo} width={200} height={200} alt="logo" />
        <p>Transformando visitantes em clientes.</p>
      </S.LeadsterLogo>
      <S.FooterLinks>
        <article>
          <strong>Links Principais</strong>
          <p>Home</p>
          <p>Ferramenta</p>
          <p>Preços</p>
          <p>Contato</p>
        </article>
        <article>
          <strong>Cases</strong>
          <p>Geração de Leads B2B</p>
          <p>Geração de Leads em Software</p>
          <p>Geração de Leads em Imobiliária</p>
          <p>Cases de Sucesso</p>
        </article>
        <article>
          <strong>Materiais</strong>
          <p>Blog</p>
          <p>Parceria com Agências</p>
          <p>Guia Definitivo do Marketing</p>
          <p>Materiais</p>
        </article>
        <article>
          <strong>Siga a Leadster</strong>
          <S.SocialMedia>
            {SocialMediaLinks.map((link) => (
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
          <span>
            Email:
            <p>contato@leadster.com.br</p>
          </span>
          <span>
            Telefone:
            <p>(42) 98828-9851</p>
          </span>
        </article>
      </S.FooterLinks>
      <S.Copywriting>
        <main>
          <div className="copyDescription">
            <p className="copyright">
              Copyright © 2015 - 2022 Todos os direitos reservados |
            </p>
            <p className="leadster-text"> Leadster</p>
          </div>

          <p>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
            Termos de uso
          </p>
        </main>
      </S.Copywriting>
    </S.Container>
  );
};
