import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 5rem;
  width: 100%;
  background-color: var(--blue);
  display: flex;
  justify-content: end;
  align-items: center;

  .divTitleAndButton {
    display: flex;
    padding: 0 4rem;
    gap: 1rem;

    .divTitle {
      background-color: var(--white);
      color: var(--black);
      padding: 0.5rem 3rem;
      border-radius: var(--border-radius);

      h1 {
        font-size: 1rem;
      }
    }

    .buttonExit {
      background-color: var(--red);
      color: var(--white);
      padding: 0.5rem 3rem;
      border-radius: var(--border-radius);
      font-size: 1rem;
    }
  }
`;
