import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
`;

export const Left = styled.div`
  h1{
      font-size: 1.5rem;
      align-items: center;
      color: #c8190c;
      font-weight: 500;
  }
`;

export const Right = styled.div`
    a{
        margin-left: 2rem;
        font-weight: 400;
        color: #c8190c;
        text-decoration: none;
        transition: .3s ease-in-out filter;

        &:hover{
            filter: brightness(0.8);
        }
    }
`;
