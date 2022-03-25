import styled from "styled-components";

export const Container = styled.div`
    display:  flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid red;
`;

export const FirstContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-direction: row;
    border: 1px solir red;
    padding: 100px;

    .about{
        width: 100%;
        height: 300px;
    }
    .about-image{
        width: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
`;

