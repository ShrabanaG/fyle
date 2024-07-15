import React from 'react'
import { whyChooseUsContent } from '../../constants'

import "./whychooseus.css";

const WhyChooseUs = () => {
    return (
        <div className='why-choose-us-container padding'>
            <div className='why-choose-us-header section-header'>
                Why Choose Us
            </div>
            <div className='section-sub-header'>
                Why We Are best
            </div>
            <div className='why-choose-us-content' style={{ padding: 20 }}>
                {whyChooseUsContent.map((each, idx) => {
                    return (
                        <div className='why-choose-us-content-item' key={idx}>
                            <div className='why-choose-us-content-item-icon'>
                                <img src={each.icon} alt={each.title} width={72} height={72} />
                            </div>
                            <div className='why-choose-us-content-item-title'>
                                {each.title}
                            </div>
                            <div className='why-choose-us-content-item-description'>
                                {each.description}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WhyChooseUs