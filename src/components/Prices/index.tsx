import React from "react";
import PriceItem from "../PriceItem";
import { Container, PricesContainer } from "./style";

const Prices = () => {
  return (
    <Container>
      <h1>Nossos planos</h1>
      <PricesContainer>
        <PriceItem name="R$9" tempo="/mensal" feature="Acesso a conteúdo exclusivo" feature2="Grupo exclusivo no Whatsapp" feature3="Sorteios todos os meses" feature4="Contato com nossos jornalistas" />
        <PriceItem name="R$50" tempo="/anual" feature="Acesso a conteúdo exclusivo" feature2="Grupo exclusivo no Whatsapp" feature3="Sorteios todos os meses" feature4="Contato com nossos jornalistas" />
      </PricesContainer>
    </Container>
  );
};

export default Prices;
