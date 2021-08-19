import React from "react";
import { Container, Content, Left, Right } from "./style";

interface NewsPageProps {
  name: string;
  content: string;
  content2: string;
  img: any;
}

const NewsPage = ({ name, content, content2, img }: NewsPageProps) => {
  return (
    <Container>
      <Content>
        <Left>
          <h1>{name}</h1>
          <p>{content}</p>
          <p>{content2}</p>
        </Left>
      </Content>

      <Right>
        <img src={img} alt="Home Image" />
      </Right>
    </Container>
  );
};

export default NewsPage;
