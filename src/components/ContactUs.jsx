
import {Button, Checkbox, Label, Textarea, TextInput} from "flowbite-react";
import React from "react";

export default function ContactUs() {
    return (
        <form className="flex flex-col gap-4 ">
            <div>
                <TextInput id="name" type="text" placeholder="Your name" required />
            </div>
            <div>
                <TextInput id="email1" type="email" placeholder="E-mail" required />
            </div>
            <div>
                <Textarea id="message" placeholder="Leave your message..." required rows={5}/>
            </div>
            <button type="submit" className="contactus-button">Send</button>
        </form>
    );
}
