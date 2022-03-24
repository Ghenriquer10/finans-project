import * as C from './style'
import logo from '../../assets/logo.png'
export const Header = () => {
    return(
        <C.HeaderContainer>
            <C.Logo><a href="*"><img src={logo} alt="logo"/></a></C.Logo>
            <C.Menu>
                <a href='*'><p>Home</p></a>
                <a href='*'><p>Recursos</p></a>
                <a href='*'><p>Benêficios</p></a>
                <a href='*'><p>Preços</p></a> 
                <button>
                    Entrar
                </button>
            </C.Menu>
        </C.HeaderContainer>
    )
}