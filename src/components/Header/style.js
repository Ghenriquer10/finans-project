import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 70px;
    background: #F7CA3F;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;

    img{
        width: 150px;
        margin-left: 30px;
    }

`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 30px;

    p{
        margin: 0 5px;
        color: #807E7A;
        cursor: pointer;
        padding: 5px 10px;
        border: none;
    }

    button{
        background-color: #F7CA3F;
        border: 1px solid #fff;
        cursor: pointer;
        padding: 7px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }

    button:hover{
        transition: all 0.5s;
        background-color: #E2AB00;
    }

    p:hover{
        transition: all 0.5s;
        background-color: #E2AB00;
        color: #fff;
    }
`;