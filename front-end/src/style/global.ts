import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 :root{

    --blue:#1150B2;
    --red:#ED0808;
    --grey:#A0A0A0;
    --white:#FFF;
    --black: #000;
    --border-radius: 0.250rem ;
}

*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

button{
    cursor: pointer;
    border: none;
    outline: none;
}

.buttonForm{
    width: 100%;
    padding: 0.625rem 1.25rem;
    border-radius: 0.125rem;
    background-color: var(--blue);
    margin: 1rem 0 1rem 0;
    font-weight: 600;
    font-size: 1rem;
    color:var(--white);
}


a{
    text-decoration:none;
}

`;
