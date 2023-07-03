import React, { FC } from 'react';
import Image from 'next/image';
import * as S from './styles';
import GraphicImage from '../../assets/images/comparativo_img_CTA.png';
import SeloRD from '../../assets/images/selo_RD.png';
import NoCard from '../../assets/images/no-card-dark.webp';
import Rating from '../../assets/images/rating.webp';

interface FormComponentProps {
  title?: string;
  strongTitle?: string;
  information?: string;
  textButton?: string;
  strongInformation?: string;
  cardText?: string;
  strongCardText?: string;
  satisfactionText?: string;
  strongSatisfactionText?: string;
}

export const FormComponent: FC<FormComponentProps> = ({
  title = 'Pronto para triplicar sua',
  strongTitle = 'Geração de Leads?',
  information = 'Criação e ativação em',
  strongInformation = '4 minutos.',
  textButton = 'VER DEMONSTRAÇÃO',
  cardText = 'é necessário Cartão de Crédito',
  strongCardText = 'Não',
  satisfactionText = '/5 média de satisfação',
  strongSatisfactionText = '4.9',
}) => {
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
          {title} <br /> <strong>{strongTitle}</strong>
        </S.Title>
        <S.Information>
          {information} <strong>{strongInformation}</strong>
        </S.Information>
        <S.Demonstration>
          <S.Button>{textButton}</S.Button>
          <Image src={SeloRD} alt="selo rd station" width={150} height={150} />
        </S.Demonstration>
        <S.MoreInfo>
          <Image src={NoCard} width={15} height={15} alt="imagem de cartão" />
          <span>
            <strong>{strongCardText}</strong> {cardText}
          </span>
          <Image
            src={Rating}
            width={100}
            height={100}
            alt="estrelas"
            className="stars"
          />
          <span>
            <strong>{strongSatisfactionText}</strong>
            {satisfactionText}
          </span>
        </S.MoreInfo>
      </S.Info>
    </S.Container>
  );
};
