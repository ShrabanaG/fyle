import React, { useState } from 'react'
import "./contactUsDialogue.css";

const ContactUsDialogue = ({ handleDialogueClose }: any) => {
    const [dialogFormInput, setDialogFormInput] = useState({
        email: "",
        first_name: "",
        last_name: "",
    })

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setDialogFormInput({ ...dialogFormInput, [name]: value });
    }

    const handleFormDataSubmit = async (event: any) => {
        event.preventDefault();
        console.log(dialogFormInput);
        const formData = new FormData(event.target);

        try {
            const response = await fetch("https://getform.io/f/ajjempea", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json",
                }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            if (response.status === 200) {
                alert("Form submission successfull");
                handleDialogueClose();
            }
            const responseData = await response.json();
            console.log(responseData);

        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }

    }

    return (
        <>
            <div className='dialogue-overlay' onClick={handleDialogueClose}></div>
            <div className='dialogue-container'>
                <div className='dialogue-header'>Talk To Us</div>
                <form onSubmit={handleFormDataSubmit}>
                    <div className='dialogue-content'>
                        <div className='dialogue-content-email'>
                            <input
                                type='text'
                                value={dialogFormInput.email}
                                onChange={handleInputChange}
                                name="email"
                                required
                            />
                            <label className='email-label'>Work Email</label>

                        </div>
                        <div className='dialogue-content-name'>
                            <div className='dialogue-content-first-name'>
                                <input
                                    type='text'
                                    id='text'
                                    value={dialogFormInput.first_name}
                                    onChange={handleInputChange}
                                    name="first_name"
                                    required
                                />
                                <label className='name-label'>First Name</label>
                            </div>
                            <div className='dialogue-content-last-name'>
                                <input
                                    type='text'
                                    id='text'
                                    value={dialogFormInput.last_name}
                                    onChange={handleInputChange}
                                    name="last_name"
                                    required
                                />
                                <label className='last-name-label'>Last Name</label>
                            </div>

                        </div>
                    </div>


                    <div className='dialogue-checkbox'>
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">
                            I agree to Fyle's terms and conditions, and provide <br />
                            consent to send me communication. </label>
                    </div>
                    <div className='dialogue-action-btn'>
                        <button type='submit' style={{ cursor: "pointer" }}>Contact Us</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactUsDialogue