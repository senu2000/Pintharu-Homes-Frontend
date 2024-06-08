import {Button, Checkbox, Label, Textarea, TextInput} from "flowbite-react";
import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import {displaySuccessToast} from "./ToastProvider.jsx";

export default function ContactUs() {
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
        <form className="flex flex-col gap-4 " ref={form} onSubmit={sendEmail}>
            <div>
                <TextInput id="name" type="text" placeholder="Your name" name="user_name" required />
            </div>
            <div>
                <TextInput id="email1" type="email" placeholder="E-mail" name="from_name" required />
            </div>
            <div>
                <Textarea id="message" placeholder="Leave your message or feedback ..." name="message" required rows={5}/>
            </div>
            <button type="submit" className="contactus-button">Send</button>
        </form>
    );
}
