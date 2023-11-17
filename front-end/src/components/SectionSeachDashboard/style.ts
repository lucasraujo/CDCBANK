import styled from "styled-components";

export const StyledSectionSeachDashboard = styled.section`
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  .divInputButton {
    display: flex;
    gap: 2rem;

    .inputSeach {
      font-size: 1rem;
    }
  }

  .searchButton {
    padding: 0.5rem 3rem;
    border-radius: var(--border-radius);
    font-size: 1rem;
    border: 0.15rem solid black;
  }
`;
