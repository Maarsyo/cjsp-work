import React from "react";
import { Container, Content } from "./style";
import NewsItem from "../NewsItem";

const News = () => {
  return (
    <Container>
      <h1>Novas notícias</h1>
      <Content>
        <NewsItem
          name="Messi vai para o PSG"
          content="O atleta argentino vai receber, aos 34 anos, 35 milhões de euros (R$ 214 milhões) por temporada por dois anos, com opção de renovação até 2024. Messi deve chegar a Paris ainda nesta terça-feira (8) para realizar exames médicos e assinar seu contrato."
          to="/messi"
        />
        <NewsItem
          name="Windows 11"
          content="Nesta quinta-feira (12), a Microsoft começa a distribuir mais uma atualização para testadores do Windows 11. Os canais Dev e Beta receberamm o novo pacote acompanhado por valiosas adições em aplicativos nativos, incluindo a Calculadora, o Email e a Ferramenta de Captura."
          to="/windows-11"
        />
      </Content>
    </Container>
  );
};

export default News;
