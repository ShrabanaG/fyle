import React from 'react'
import { Quotemarks } from '../../assets';
import "./clientfeedback.css";

const ClientFeedback = () => {
    return (
        <div className='client-feedback-container'>
            <div className='client-feedback-header section-header'>
                Client's Feedback
            </div>
            <div className='client-feedback-sub-header section-sub-header'>
                people say's about us !
            </div>
            <div className='client-feedback-content'>

                <div className='client-feedback-content-item'>
                    <div className='client-feedback-content-image'>
                        <img src={Quotemarks} width={64} height={45} alt="quote-marks-left" />
                    </div>
                    <div className='content-main'>
                        Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is<br />
                        reproduced below for those interested. Sections Bonorum et Malorum original.
                    </div>
                    <div className='content-sub'>
                        <span className='name'>JANNAT TUMPA</span>
                        <span className='designation'>- COO, AMERIMAR ENTERPRISES, INC.</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ClientFeedback;