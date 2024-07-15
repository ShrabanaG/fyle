import React, { useState } from 'react'
import { HeroImage } from '../../assets'
import "./herosection.css";
import ContactUsDialogue from '../contactUsDialogue/ContactUsDialogue';

const HeroSection = () => {
    const [isDialogueOpen, setIsDialogueOpen] = useState<boolean>(false);

    const handleDialogueOpen = () => {
        setIsDialogueOpen(true);
    }

    const handleDialogueClose = () => {
        setIsDialogueOpen(false);
    }
    return (
        <div className='hero-container padding'>
            <div className='hero-content'>
                <div className='hero-header'>Award Winning</div>
                <div className='hero-sub-header'>
                    Digital Marketing <br />Agency
                </div>
                <div className='hero-para'>
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque <br />
                    vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus <br />
                    feugiat et fermentum
                </div>
                <button className='hero-btn' onClick={handleDialogueOpen}>Contact Us</button>
                {isDialogueOpen && <ContactUsDialogue handleDialogueClose={handleDialogueClose} />}
            </div>
            <div className='hero-image-continer'>
                <img src={HeroImage} width={487} height={737} alt="hero-image" />
            </div>
        </div>
    )
}

export default HeroSection