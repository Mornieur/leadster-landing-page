import Image from 'next/image';
import * as S from './styles';
import logo from '../../assets/images/logo.png';
import assetHeader from '../../assets/images/asset-header.png';
import { FC } from 'react';

interface HeaderProps {
  minText?: string;
  minTitle?: string;
  maxTitle?: string;
}

export const Header: FC<HeaderProps> = ({
  minText = 'WEBNARS EXCLUSIVOS',
  minTitle = 'Menos Conversinha,',
  maxTitle = 'Mais Conversão',
}) => {
  return (
    <S.Container>
      <article>
        <Image src={logo} width={200} height={100} alt="logo" />
      </article>
      <S.TitleComponent>
        <S.MinText>{minText}</S.MinText>
        <S.MinTitle>{minTitle}</S.MinTitle>
        <S.MaxTitle>
          {maxTitle}
          <Image
            className="minLogo"
            src={assetHeader}
            width={40}
            height={40}
            alt="asset"
          />
        </S.MaxTitle>

        <S.StyledText bold>
          Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no
          seu negócio
        </S.StyledText>
      </S.TitleComponent>
    </S.Container>
  );
};
