import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
`;

export const Left = styled.div`
  height: 35vh;
  margin-left: 3rem;

  h1 {
    font-weight: 600;
    color: #f1f1f1;
  }
  h2 {
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
  }
  p {
    color: #777;
    font-weight: 500;
    width: 60%;
    margin-bottom: 1rem;
  }
  .primary-btn {
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

export const Right = styled.div`
  height: 65vh;
  margin-right: 5rem;
`;

export const Image = styled.img`
  width: 25rem;
  margin-top: 5rem;
`;
