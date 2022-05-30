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
        border-radius: 5px;
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

export const ContainerContent = styled.div`
    display:  flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
`;

export const FirstContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-direction: row;
    padding: 100px;
    width: 95%;
    height: 500px;
    
    .about{
        width: 100%;
        height: 300px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p:first-child{
            font-size: 2.4em;
            color: #F7CA3F;
        }

        p{
            font-size: 0.9em;
        }

        button{
            width: 17%;
            height: 30px;
            background-color: #fff;
            border: 2px solid blue;
            color: blue;
        }

        button:hover{
            transition: all 1s;
            background-color: blue;
            color: #fff;
        }

    }
    
    .about-image{
        width: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
`;

export const SecondContent = styled.div`
    height: 800px;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 100px;

    .about-image{
        width: 100%;
        img{
            height: 600px;
            width: 500px;
        }
    }
    
    .about{
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 50px;

        p:first-child{
            font-size: 2.4em;
            color: #F7CA3F;
        }

        p{
            font-size: 0.9em;
        }

        button{
            width: 17%;
            height: 30px;
            background-color: #fff;
            border: 2px solid blue;
            color: blue;
        }

        button:hover{
            transition: all 1s;
            background-color: blue;
            color: #fff;
        }
    }

`;

export const ThirdContent = styled.div`
    width: 80%;
    height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        color: #F7CA3F;
        margin-top: 20px;
    }

    p{
        width: 80%;
        margin-top: 5px;
    }
    
    img{
        height: 200px;
        width: 350px;
    }
    .easily{
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .time{
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .suport{
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
`;
