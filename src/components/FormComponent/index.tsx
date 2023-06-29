import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import GraphicImage from '../../assets/images/comparativo_img_CTA.png';
import SeloRD from '../../assets/images/selo_RD.png';
import NoCard from '../../assets/images/no-card-dark.webp';
import Rating from '../../assets/images/rating.webp';

export const FormComponent = () => {
  return (
    <S.Container>
      <S.Graphic>
        <Image
          alt="imagem de gráfico"
          width={500}
          height={500}
          src={GraphicImage}
        />
      </S.Graphic>
      <S.Info>
        <S.Title>
          Pronto para triplicar sua <br /> <strong>Geração de Leads?</strong>
        </S.Title>
        <S.Information>
          Criação e ativação em <strong>4 minutos</strong>.
        </S.Information>
        <S.Demonstration>
          <S.Button>VER DEMONSTRAÇÃO</S.Button>
          <Image src={SeloRD} alt="selo rd station" width={150} height={150} />
        </S.Demonstration>
        <S.MoreInfo>
          <Image src={NoCard} width={15} height={15} alt="imagem de cartão" />
          <span>
            <strong>Não</strong> é necessário Cartão de Crédito
          </span>
          <Image
            src={Rating}
            width={100}
            height={100}
            alt="estrelas"
            className="stars"
          />
          <span>
            <strong>4.9</strong>/5 média de satisfação
          </span>
        </S.MoreInfo>
      </S.Info>
    </S.Container>
  );
};
