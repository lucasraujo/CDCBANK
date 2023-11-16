import styled from "styled-components";

export const StyledFormLogin = styled.div`



    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1{
        font-size: 2rem;
        color:var(--black);
    }

    .labelSelectDiv{
        height: 20%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        label{
            margin-bottom: 0.25rem;
        }

        select{
            width: 100%;
            padding: 0.5rem;
        }

    }

    

    button{
        padding: 0.5rem 5rem;
        margin-bottom: 4rem;
        background-color:var(--blue);
        border-radius: var(--border-radius);

        font-size: 1.5rem;
        color: var(--white);
        box-shadow: -2px 22px 45px 0px rgba(0,0,0,0.52);
        -webkit-box-shadow: -2px 22px 45px 0px rgba(0,0,0,0.52);
        -moz-box-shadow: -2px 22px 45px 0px rgba(0,0,0,0.52);
    }

`