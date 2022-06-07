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

    @media (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
    }

    .pages{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center; 

        a{
            margin: 0 20px;
            font-family: monospace;
            font-size: 1.3em;
            color: #fff;

            @media (min-width: 320px) and (max-width: 768px) {
                margin: 0 5px;
            }
            
        }

    }
    .social-medias{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        a{
            margin: 0 20px;
            color: #fff;
        }

        svg{
            height: 40px;
            width: 40px;
            @media (min-width: 320px) and (max-width: 480px) {
                height: 30px;
                width: 30px;
            }
        }
    }
`;