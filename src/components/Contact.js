import React, {useEffect, useState} from 'react'
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { GrInstagram } from 'react-icons/gr';
import { AiOutlineGithub } from 'react-icons/ai';

function Contact() {

    const [igData, setIgData] = useState([{}]);
    
    useEffect(()=> {
        fetch('https://graph.instagram.com/<INSTAGRAM USER ID>?fields=username&access_token=<INSTAGRAM ACCESS TOKEN>').then(
            response => response.json()
        ).then(data => setIgData(data))
    }, []);

    const igURL = `https://instagram.com/${igData.username}`;

    return (
        <div className='contact'>
            <div className='contact-header-info'>
                <h1>Get in touch.</h1>
            </div><br></br>
            <div className='contact-links'> 
                <div className='box'>
                    <a href="mailto:arpanneupane19@gmail.com" target='__blank'><MdEmail/> Email</a>
                </div>
                <div className='box'>
                    <a href={igURL} target="__blank"><GrInstagram/> Instagram</a>
                </div>
                <div className='box'>
                    <a href="https://github.com/arpanneupane19" target='__blank'><AiOutlineGithub/> GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
