import Image from 'next/image';
import * as S from './styles';
import logo from '../../assets/images/logo.png';
import assetHeader from '../../assets/images/asset-header.png';

export const Header = () => {
  return (
    <S.Container>
      <article>
        <Image src={logo} width={200} height={100} alt="logo" />
      </article>
      <S.TitleComponent>
        <S.MinText>WEBNARS EXCLUSIVOS</S.MinText>
        <S.MinTitle>Menos Conversinha,</S.MinTitle>
        <S.MaxTitle>
          Mais Conversão
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
