import React from 'react'
import * as C from './style'
import {FaAndroid, FaApple} from 'react-icons/fa'
import person from '../../assets/capa-mulher.png'
import about from '../../assets/saiba.png'
import juros from '../../assets/juros.png'
import easily from '../../assets/facil.png'
import time from '../../assets/economize.png'
import suport from '../../assets/suporte.png'

export default function Body(){
    return(
        <>
            <C.ContainerTop>
                <C.About>
                        <p className='tittle-about'>Suas contas descomplicadas</p>
                        <p>Usado por mais de 1 milhão de pessoas, o Finans é uma ferramenta online que vai facilitar sua vida financeira.</p>
                        <form>
                            <input placeholder='Seu e-mail'/>
                            <button>Cadastre-se</button>
                        </form>
                        <C.Mobile>
                            <p>Disponível para:</p><a href='*'><FaAndroid size={20}/></a><a href='*'><FaApple size={20}/></a>
                        </C.Mobile>
                    </C.About>
                    <C.Banner>
                        <img src={person} alt="foto-capa"/>
                </C.Banner>
            </C.ContainerTop>
            <C.ContainerContent>
                <C.FirstContent>
                    <div className='about'>
                        <p>Saiba para onde vai o seu dinheiro</p>
                        <p>Com o FINANS, você categoriza todos os seus lançamentos, com gráficos simples, você sabe de onde vem e para onde vai o seu dinheiro.</p>
                        <button>Saiba mais...</button>
                    </div>
                    <div className='about-image'><img src={about} alt='saiba mais'/></div>
                </C.FirstContent>
                <C.SecondContent>
                    <div className='about-image'><img src={juros} alt='saiba mais'/></div>
                    <div className='about'>
                        <p>Pare de paga juros e economize</p>
                        <p>Manter as contas em dia é sempre um problema? O Finans avisa você: Receba alertas de contas a pagar e a receber!</p>
                        <button>Saiba mais...</button>
                    </div>
                </C.SecondContent>
                <C.ThirdContent>
                    <div className='easily'>
                       <img src={easily}/>
                       <h1>Fácil de usar</h1>
                       <p>O Finans vai além do básico e permite que você faça controles incríveis, esseciais para suas finanças. Simples como tem que ser.</p>
                    </div>
                    <div className='time'>
                        <img src={time}/>
                        <h1>Economize seu tempo!</h1>
                        <p>Tempo é dinheiro! Em segundos você tem tudo sobre controle e aproveite seu tempo com o que realmente importa para você!</p>
                    </div>
                    <div className='suport'>
                        <img src={suport}/>
                        <h1>Suporte amigo</h1>
                        <p>Dúvida? Perguntas? Nosso suporte super legal ajuda você! A gente está aqui para resolver o sues problemas e deixar a sua vida mais fácil!</p>
                    </div>
                </C.ThirdContent>
            </C.ContainerContent>
        </>
    )
}