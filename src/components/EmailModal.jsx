import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';

export default function EmailModal() {
    const formRef=useRef();
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:''
    })
    return(
        <div id="modal">
            
        </div>
    )
};
