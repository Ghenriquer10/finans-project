import React from 'react'
import * as C from './style'
import {MdOutlineFacebook} from 'react-icons/md'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter, FaYoutube} from 'react-icons/fa'

export default function Footer(){
    return(
        <C.FooterContainer>
            <div className='pages'>
                <a href='*'>Home</a>
                <a href='*'>Recursos</a>
                <a href='*'>Benêficios</a>
                <a href='*'>Preços</a>
            </div>
            <div className='social-medias'>
                <a href='*'><MdOutlineFacebook/></a>
                <a href='*'><FiInstagram/></a>
                <a href='*'><FaTwitter/></a>
                <a href='*'><FaYoutube/></a>
            </div>
        </C.FooterContainer>
    )
}