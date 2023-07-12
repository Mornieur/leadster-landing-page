import React, { useContext } from 'react';
import Image from 'next/image';
import * as S from './styles';
import Logo from '../../assets/images/logo.png';
import SocialMediaLinks from './utils/socialMediaLinks';
import FooterContext from '../../contexts/footer/footerContext';

export const Footer = () => {
  const footerLinks = useContext(FooterContext);

  const renderLeadsterLogo = () => (
    <S.LeadsterLogo>
      <Image src={Logo} width={200} height={200} alt="logo" />
      <p>Transformando visitantes em clientes.</p>
    </S.LeadsterLogo>
  );

  const renderMainLinks = () => (
    <article>
      <strong>Links Principais</strong>
      {footerLinks.mainLinks.map((link) => (
        <p key={link}>{link}</p>
      ))}
    </article>
  );

  const renderCasesLinks = () => (
    <article>
      <strong>Cases</strong>
      {footerLinks.casesLinks.map((link) => (
        <p key={link}>{link}</p>
      ))}
    </article>
  );

  const renderMaterialsLinks = () => (
    <article>
      <strong>Materiais</strong>
      {footerLinks.materialsLinks.map((link) => (
        <p key={link}>{link}</p>
      ))}
    </article>
  );

  const renderContactInfo = () => (
    <article>
      <strong>Siga a Leadster</strong>
      <SocialMediaLinks />
      <span>
        Email:
        <p>{footerLinks.contactInfo.email}</p>
      </span>
      <span>
        Telefone:
        <p>{footerLinks.contactInfo.telefone}</p>
      </span>
    </article>
  );

  const renderCopywriting = () => (
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
  );

  return (
    <S.Container className="footer-container">
      {renderLeadsterLogo()}
      <S.FooterLinks>
        {renderMainLinks()}
        {renderCasesLinks()}
        {renderMaterialsLinks()}
        {renderContactInfo()}
      </S.FooterLinks>
      {renderCopywriting()}
    </S.Container>
  );
};
