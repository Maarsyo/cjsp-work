import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  padding: 1.25rem;
  box-shadow: -1px 7px 18px -6px rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.1);
  margin: 1rem 3rem;
  h1 {
    text-align: left !important;
  }

  span {
    padding: 0;
    margin: 0;
    position: relative;
    color: #f1f1f1;
  }

  ul {
    list-style: none;
    margin-top: 1rem;

    li {
      color: #b8b8b8;
      border-bottom: 2px solid rgba(184, 184, 184, 0.2);
      text-align: left;
      padding-bottom: 1rem;
      padding-top: 1rem;
      padding-left: 0.5rem;
      &:first-child {
        border-top: 2px solid rgba(184, 184, 184, 0.2);
      }
      &:last-child {
        margin-bottom: 1rem;
      }
    }
  }

  button {
    width: 100%;
    background: #c8190c;
    border: 0;
    font-family: "Poppins";
    height: 6vh;
    color: #f1f1f1;
    cursor: pointer;
    transition: 0.3s ease-in-out filter;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
