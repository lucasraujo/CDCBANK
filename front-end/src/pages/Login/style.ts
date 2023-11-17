import styled from "styled-components";

export const StyledLogin = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--blue);
  display: flex;

  .LogoAside {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .imgLogo {
      width: 70%;
    }
  }
  .formDiv {
    width: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
