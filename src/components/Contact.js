import React from 'react'
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { GrYoutube } from 'react-icons/gr';
import { AiOutlineGithub } from 'react-icons/ai';

function Contact() {
    return (
        <div className='contact'>
            <div className='contact-header-info'>
                <h1>Get in touch.</h1>
            </div><br></br>
            <div className='contact-links'>
                <div className='box'>
                    <a href="mailto:arpanneupane19@gmail.com" target='__blank'><MdEmail /> Email</a>
                </div>
                <div className='box'>
                    <a href="https://youtube.com/ArpanNeupaneProductions" target="__blank"><GrYoutube /> YouTube</a>
                </div>
                <div className='box'>
                    <a href="https://github.com/arpanneupane19" target='__blank'><AiOutlineGithub /> GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
