import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  padding: 1.25rem;
  box-shadow: -1px 7px 18px -6px rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
  margin-right: auto;
  max-height: 40vh;
  margin-bottom: 3vw;
  h1 {
    font-weight: bold;
    color: white;
  }
  p {
    color: #b8b8b8;
    margin-bottom: 1rem;
  }
  a {
    color: #f1f1f1;
    background: #c8190c;
    padding: 0.5rem 0.8rem;
    font-weight: 400;
    border: 2px solid #c8190c;
    transition: 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
      background: #bd1616;
      border-color: #bd1616;
      color: #f1f1f1;
      filter: brightness(0.8);
    }
  }
`;
