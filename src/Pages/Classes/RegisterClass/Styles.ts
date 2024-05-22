import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;
