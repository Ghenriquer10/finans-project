import React, { useContext } from 'react'
import * as C from './style'
import logo from '../../assets/logo.png'
import { MdOutlineMenuOpen } from 'react-icons/md'
import { DataContext } from '../../contexts/datas'
import { GrLinkNext } from 'react-icons/gr'
import {useSpring, animated} from 'react-spring'

export const Header = () => {

    const { menuMobile ,setMenuMobile } = useContext(DataContext)
    function toogleMenu(){
        setMenuMobile(prev => !prev)
        console.log(menuMobile)
    }

    const animation = useSpring({
        from: {
            position: 'absolute',
            top: '0',
            translateX: '-100%'
        },
        to: {
            position: 'absolute',
            top: '0',
            height: '100vh',
            width: '100%',
            translateX: '0%',
        }        
    })

    return(
        <C.HeaderContainer>
            {menuMobile ? 
            <animated.div style={animation}>
                <C.MobileMenu>
                    <GrLinkNext onClick={toogleMenu}/>
                    <a href='*'><p>Home</p></a>
                    <a href='*'><p>Recursos</p></a>
                    <a href='*'><p>Benêficios</p></a>
                    <a href='*'><p>Preços</p></a> 
                    <button>
                        Entrar
                    </button>
                </C.MobileMenu> 
            </animated.div>: null }
            
            <C.Logo><a href="*"><img src={logo} alt="logo"/></a></C.Logo>
            <C.MobileMenuButton>
                <MdOutlineMenuOpen onClick={toogleMenu}/>
            </C.MobileMenuButton>
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