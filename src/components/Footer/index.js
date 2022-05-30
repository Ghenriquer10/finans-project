import React from 'react'
import * as C from './style'
import {MdOutlineFacebook} from 'react-icons/md'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter, FaYoutube} from 'react-icons/fa'

export default function Footer(){
    return(
        <C.FooterContainer>
            <div className='pages'>
                <a>Home</a>
                <a>Recursos</a>
                <a>Benêficios</a>
                <a>Preços</a>
            </div>
            <div className='social-medias'>
                <a><MdOutlineFacebook/></a>
                <a><FiInstagram/></a>
                <a><FaTwitter/></a>
                <a><FaYoutube/></a>
            </div>
        </C.FooterContainer>
    )
}