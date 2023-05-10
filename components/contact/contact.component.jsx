import React, { useState } from "react";

import emailjs from "emailjs-com";

import { Input, TextArea } from "../input/input.component";

const serviceId = process.env.NEXT_PUBLIC_ES_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_ES_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_ES_USER_ID;

const Contact = () => {
    const [errorMessage, setErrorMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, e.target, userId).then(
            (res) => {
                e.target.reset();
                setSuccessMessage(true);

                if (errorMessage === true) {
                    setErrorMessage(false);
                }
            },
            (err) => {
                setErrorMessage(true);
            }
        );
    };

    return (
        <section id="contact" className="mt-20 pt-10 lg:pt-40">
            <h2 className="text-2xl lg:text-4xl mb-4 lg:mb-10 text-primaryColor font-bold">
                Contact
            </h2>
            <form
                onSubmit={sendEmail}
                className="w-3/4 md:w-2/3 lg:w-3/6 flex flex-col gap-4 mx-auto"
            >
                <Input
                    htmlFor="firstName"
                    labelValue="First name"
                    type="text"
                    required={true}
                />
                <Input htmlFor="lastName" labelValue="Last name" type="text" />
                <Input
                    htmlFor="email"
                    labelValue="Email"
                    type="email"
                    required={true}
                />
                <Input
                    htmlFor="subject"
                    labelValue="Subject"
                    type="text"
                    required={true}
                />
                <TextArea htmlFor="message" labelValue="Message" />
                <button
                    type="submit"
                    className="rounded-md cursor-pointer bg-accentColor w-48 lg:w-64 py-2 text-center hover:bg-accentColorShade transition duration-300 ease-in-out shadow shadow-gray text-black"
                >
                    Send
                </button>
                {successMessage && (
                    <p className="text-lg mt-4 text-center text-primaryColor">
                        {"Message sent succesfully! ☺"}
                    </p>
                )}
                {errorMessage ?? (
                    <p className="text-lg mt-4 text-center text-primaryColor">
                        {"Message was not sent. Try again please"}
                    </p>
                )}
            </form>
        </section>
    );
};

export default Contact;
