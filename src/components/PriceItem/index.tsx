import React from "react";
import { Container } from './style'

interface PriceItemProps {
  name: string;
  feature: string;
  feature2: string;
  feature3: string;
  feature4: string;
  tempo: string;
}

const PriceItem = ({ name, feature, feature2, feature3, feature4, tempo }: PriceItemProps) => {
  return (
    <Container>
      <h1>{name} <span>{tempo}</span></h1>
      <ul>
        <li>{feature}</li>
        <li>{feature2}</li>
        <li>{feature3}</li>
        <li>{feature4}</li>
      </ul>
      <button>Adquirir agora</button>
    </Container>
  );
};

export default PriceItem;
