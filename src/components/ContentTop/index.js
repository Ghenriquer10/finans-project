import * as C from './style'
import person from '../../assets/capa-mulher.png'
import {FaAndroid, FaApple} from 'react-icons/fa'
export default function ContentTop(){
    return(
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
    )
}