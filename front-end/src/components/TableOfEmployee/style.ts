import styled from "styled-components";

export const StyledTableOfEmployee = styled.div`

    display: flex;
    justify-content: center;

    table{
        width: 100%;
        border-collapse: collapse;
        border: 0.1rem solid black;
        padding: 1rem;
        font-size: 1rem;


        .trTitle{
            border-top: 0.1rem solid gray;
            border-collapse: collapse;
            border-bottom: 0.1rem solid black;
            background-color: var(--grey);
            
        }

        .trValue{
            border-bottom: 0.1rem solid black;
        }

        td{
            text-align: center;
            border-collapse: collapse;
            border-bottom: 1rem;
            padding: 1rem;
            font-weight: 500;
        }


        .tdButtons{
            display: flex;
            justify-content: center;
            gap: 1rem;
        }

    }

`