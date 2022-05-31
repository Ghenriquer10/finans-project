import styled from "styled-components";

export const ContainerTop = styled.div`
    background-color: #F7CA3F;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    
    @media (min-width: 320px) and (max-width: 768px) {
        height: 350px;
    }
`;

export const About = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 100px;

    @media (min-width: 320px) and (max-width: 768px) {
        padding: 10px;
        align-items: center;
        justify-content: space-around;
    }
    
    
    
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
        
        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 2.5em;
        }
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
        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 0.7em;
        }
    }
    
    button{
        width: 30%;
        border: none;
        padding: 10px;
        background-color: #08718F;
        color: #fff;
        cursor: pointer;
        font-size: 1.1em;

        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 0.7em;
        }
    }
    
    button:hover{
        transition: all 0.5s;
        background-color: #1CC5F4;
    }
`;

export const Mobile = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    
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

    @media (min-width: 320px) and (max-width: 1024px) {
        display: none;
    }
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
    justify-content: space-around;
    flex-direction: column;
    flex-direction: row;
    padding: 100px;
    width: 95%;
    height: 100%;
        @media (min-width: 320px) and (max-width: 768px) {
            padding: 0;
            flex-direction: column;
        } 

        @media (min-width: 769px) and (max-width: 1024px){
            padding: 0;
        }
    
    .about{
        width: 100%;
        height: 300px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        @media (min-width: 320px) and (max-width: 768px) {
            padding: 10px;
            height: 300px;
            justify-content: space-around; 
        }
        
        p:first-child{
            font-size: 2.4em;
            color: #F7CA3F;
        }

        p{
            font-size: 0.9em;
        }

        button{
            width: 50%;
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
    height: 100%;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 100px;    

        @media (min-width: 320px) and (max-width: 768px) {
            padding: 0;
            flex-direction: column;
            height: 700px;
        } 

        @media (min-width: 769px) and (max-width: 1024px){
            padding: 0;
        }

    .about-image{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: 100%;
            width: 100%;

            @media (min-width: 320px) and (max-width: 768px) {
                height: 90%;
                width: 50%;
            } 
        }
    }
    
    .about{
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 50px;

        @media (min-width: 320px) and (max-width: 768px) {
            padding: 10px;
            height: 300px;
            justify-content: space-around; 
        }

        p:first-child{
            font-size: 2.4em;
            color: #F7CA3F;
        }

        p{
            font-size: 0.9em;
        }

        button{
            width: 50%;
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
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 320px) and (max-width: 1024px) {
        flex-direction: column;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 100%;
    }

    h1{
        color: #F7CA3F;
        margin-top: 20px;
        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 1.1em;
        }
    }

    p{
        width: 80%;
        margin-top: 5px;
        text-align: center;
    }
    
    img{
        height: 200px;
        width: 350px;  
        @media (min-width: 320px) and (max-width: 480px) {
            height: 150px;
            width: 220px;  
        }      
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

        .easily, .time, .suport{
            margin: 30px 0;
        }
`;
