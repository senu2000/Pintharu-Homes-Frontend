import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {displaySuccessToast} from "./ToastProvider.jsx";

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_asb5m1f', 'template_n6ctks5', form.current, {
                publicKey: 'a4WD0Ym6qh6Fn4zpD',
            })
            .then(
                () => {
                    // console.log(result.text);
                    // console.log('SUCCESS!');
                    displaySuccessToast("Your feedback sent successfully");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="from_name" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};