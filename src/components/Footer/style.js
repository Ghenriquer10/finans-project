import styled from 'styled-components'

export const FooterContainer = styled.div`
    height: 100px;
    width: 100%;
    background-color: #F7CA3F;
    color: #fff;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    .pages{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        a{
            margin: 0 20px;
            font-family: monospace;
            font-size: 1.3em;
        }

    }
    .social-medias{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        a{
            margin: 0 20px;
        }

        svg{
            height: 40px;
            width: 40px;
        }
    }
`;