import styled from "styled-components";

export const StyledTableContent = styled.tr`
  .trValue {
    border-bottom: 0.1rem solid black;
  }

  td {
    text-align: center;
    border-collapse: collapse;
    border-bottom: 1rem;
    padding: 1rem;
    font-weight: 500;
  }
  .buttonExclude {
    background-color: var(--red);
    color: var(--white);
    padding: 0.5rem 2rem;
    border-radius: var(--border-radius);
    font-size: 1rem;
    margin-left: 0.5rem;
  }

  .buttonEdit {
    background-color: var(--blue);
    color: var(--white);
    padding: 0.5rem 2rem;
    border-radius: var(--border-radius);
    font-size: 1rem;
    margin-right: 0.5rem;
  }
`;
