import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Left, Right } from './style';

const Navbar = () => {
    return(
        <Container>
            <Left>
                <h1>Mars News</h1>
            </Left>
            <Right>
                <Link to='/'>Home</Link>
                <Link to='/messi'>Notícia 1</Link>
                <Link to='/windows-11'>Notícia 2</Link>
            </Right>
        </Container>
    )
}

export default Navbar;