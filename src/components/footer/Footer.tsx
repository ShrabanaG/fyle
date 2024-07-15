import React from 'react'
import { FooterImage } from '../../assets'

import "./footer.css";

const Footer = () => {
    return (
        <div className='footer' data-testid="footer">
            <img src={FooterImage} alt="footer-image" height={56} width={1170} />
        </div>
    )
}

export default Footer