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
        @media (min-width: 320px) and (max-width: 768px) {
            margin-left: 10px;
        }
    }

`;

export const MobileMenuButton = styled.div`
    cursor: pointer;

    svg{
        color: #fff;
        height: 50px;
        width: 50px;
    }
`;

export const MobileMenu = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    background: black;
    color: #fff;
    width: 90%;
    height: 100%;
    border-radius:0 0 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #0714ab;
    opacity: 0.9;
    
    svg{
        background-color: white;
        height: 50px;
        width: 50px;
        position: absolute;
        top: 10px;
        left: 15px;
    }

    a, button{
        font-size: 1.3em;
        margin: 10px 0;
    }

    a{
        color: #fff;
    }

    button{
        width: 50%;
        border: none;
        height: 7%;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover{
        transition: all 1s;
        background-color: blue;
        color: #fff;
    }

`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 30px;

    @media (min-width: 320px) and (max-width: 768px) {
        display: none;
    }

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