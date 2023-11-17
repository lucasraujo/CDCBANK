import styled from "styled-components";

export const StyledModalRegister = styled.div`
  .createButton {
    padding: 0.5rem 3rem;
    border-radius: var(--border-radius);
    font-size: 1rem;
    border: 0.15rem solid black;
  }

  .spanError {
    font-size: 0.7rem;
    color: var(--red);
  }

  .back {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background-color: var(--white);
    padding: 1rem;
    width: 30rem;
    max-width: 90%;
  }

  .divHeaderModal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--grey);
    h2 {
      color: var(--grey);
      font-size: 1rem;
      font-weight: 200;
    }

    button {
      font-size: 2rem;
      background-color: transparent;
      color: var(--grey);
    }
  }

  .divContentModal {
    border-bottom: 1px solid var(--grey);
    padding-top: 1rem;
    padding-bottom: 1rem;

    .divLabel {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;

      .divInputAndErro {
        display: flex;
        flex-direction: column;
        width: 50%;
      }
    }
  }

  .divfooterModal {
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;

    .buttonComfirm {
      background-color: var(--blue);
      color: var(--white);
      padding: 0.5rem 1.5rem;
      border-radius: var(--border-radius);
      font-size: 1rem;
    }

    .buttonCancel {
      background-color: var(--grey);
      color: var(--white);
      padding: 0.5rem 1.5rem;
      border-radius: var(--border-radius);
      font-size: 1rem;
    }
  }
`;
