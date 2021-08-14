import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style'

interface NewsItemProps {
    name: string;
    content: string;
    to: string;
}

const NewsItem = ({ name, content, to}: NewsItemProps) => {
    return(
        <Container>
            <h1>{name}</h1>
            <p>{content}</p>
            <Link to={to}>Confira agora</Link>
        </Container>
    )
}

export default NewsItem;