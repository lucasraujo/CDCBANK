import styled from "styled-components";

export const StyledLogin = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--blue);
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  .LogoAside {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      width: 100%;
      height: 30%;
    }
    .imgLogo {
      width: 50%;
    }
  }
  .formDiv {
    width: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      justify-content: end;
      width: 100%;
      height: 70%;
      padding:2rem 0 0 0;
    }
  }
`;
