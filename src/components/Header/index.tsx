import Image from 'next/image';
import * as S from './styles';
import logo from '../../assets/images/logo.png';
import assetHeader from '../../assets/images/asset-header.png';
import { FC } from 'react';
import { motion } from 'framer-motion';

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
      <motion.div
        className="header-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
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
            Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las
            no seu negócio
          </S.StyledText>
        </S.TitleComponent>
      </motion.div>
    </S.Container>
  );
};
