import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6vw;
  margin-left: 3rem;
  margin-bottom: 3vw;
`;

export const Left = styled.div`
  width: 50%;
  padding: 1.25rem;
  box-shadow: -1px 7px 18px -6px rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
  h1 {
    font-weight: bold;
    color: white;
  }
  p {
    margin-top: 1vw;
    color: #b8b8b8;
  }
`;

export const Right = styled.div`
  margin-right: 5rem;
  height: 100%;
  margin-top: 3vw;
  img {
    border-radius: 0.25rem;
    width: 40vw;
  }
`;
