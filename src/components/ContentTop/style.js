import styled from "styled-components";

export const ContainerTop = styled.div`
    background-color: #F7CA3F;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const About = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 100px;
    
    p{
        color: #fff;
        font-size: 1.1em;
    }
    
    .tittle-about{
        font-size: 4em;
        margin-bottom: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }

    p:nth-child(2){
        
        margin-bottom: 10px;
    }
    
    
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 10px;
    }
    
    input{
        border: none;
        width: 70%;
        padding: 10px;
        font-size: 1.1em;
    }
    
    button{
        width: 30%;
        border: none;
        padding: 10px;
        background-color: #08718F;
        color: #fff;
        cursor: pointer;
        font-size: 1.1em;
    }
    
    button:hover{
        transition: all 0.5s;
        background-color: #1CC5F4;
    }
    `;

export const Mobile = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    
    svg{
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 5px;
        border: 1px solid #fff;
        width: 40px;
        height: 40px;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
    }

    svg:hover{
        transition: all 0.5s;
        background-color: #1CC5F4;
    }

`;

export const Banner = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
`;

