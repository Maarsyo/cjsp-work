import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../../assets/home.svg";
import { Container, Left, Right, Image } from "./style";

const HomeSection = () => {
  return (
    <Container>
      <Left>
        <h1>Mars News</h1>
        <h2>Melhor site sobre notícias da atualizade.</h2>
        <p>
          Site mostrando as melhores notícias da atualidade mostrando tudo que
          você precisa saber, confira todo dia para novas notícias e conteúdo
          para melhorar seu dia.
        </p>
        <Link to="" className="primary-btn">
          Notícias
        </Link>
      </Left>
      <Right>
        <Image src={homeImg} />
      </Right>
    </Container>
  );
};

export default HomeSection;
