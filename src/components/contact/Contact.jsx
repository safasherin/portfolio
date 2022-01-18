import React, { useContext, useRef, useState } from 'react'
import './contact.css';
// import Phone from "../../images/phone.png";
// import Email from "../../images/email.png";
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';
export default function Contact() {
    const formRef = useRef();
    const [send, setSend] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleSubmit = (e) => {
        e.preventDefault(e);
        emailjs.sendForm
            ('service_hig5z6c',
                'template_1l71skc',
                formRef.current,
                'user_B6yw2dyWpysCdyEiTWcXz')
            .then((result) => {
                console.log(result.text);
                setSend(true)
            }, (error) => {
                console.log(error.text);
            });

    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src="https://res.cloudinary.com/dv3uj18zo/image/upload/v1642505178/portfolio/phone_maplcf.png" alt="" className="c-img" />
                            +971507750971
                        </div>
                        <div className="c-info-item">
                            <img src="https://res.cloudinary.com/dv3uj18zo/image/upload/v1642505165/portfolio/email_bxmvqn.png" alt="" className="c-img" />
                            safasherinsulaiman@gmail.com
                        </div>
                    </div>

                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Let's talk about your projects </b> Contact me here
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333" }}
                            type="email" placeholder="Email" name="user_email" />
                        <input style={{ backgroundColor: darkMode && "#333" }}
                            type="text" placeholder="Subject" name="user_subject" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }}
                            rows="4" name="message" placeholder='Message' />
                        <button>Submit</button>
                        {send &&
                            <p>Thank you...Your message has been send</p>}
                    </form>
                </div>
            </div>

        </div>
    )
}
