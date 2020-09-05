import React from 'react';
import './Contact.css'

import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

function Contact() {
    return (
        <div >
            <p className="section-title"><span>Contact</span></p>
            <div>
                <AiOutlineMail size={28} /> matthewcb11@gmail.com
            </div>

            <div>
                <AiOutlinePhone size={28} /> (407) 304-7130
            </div>

        </div>
    );
}

export default Contact;
