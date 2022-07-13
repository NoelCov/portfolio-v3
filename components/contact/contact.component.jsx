import React, { useState } from "react";

import emailjs from "emailjs-com";

import {
    ContactContainer,
    ContactFormContainer,
    FormNamesInputContainer,
    FormInformationContainer,
    ButtonContainer,
    ErrorMessage,
} from "./contact.styles";

import SectionTitle from "../utils/section-title.component";
import Button from "../button/button.component";
import ImageContainerComponent from "../image-container/image-container.component";
import Inputcomponent, {
    formOptions,
} from "./input-container/input-container.component";

const serviceId = process.env.NEXT_PUBLIC_ES_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_ES_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_ES_USER_ID;

const ContactPage = () => {
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
        <ContactContainer>
            {successMessage ? (
                <>
                    <SectionTitle>{"Message sent succesfully! ☺"}</SectionTitle>
                    <ImageContainerComponent
                        alt="success message"
                        src="/images/thankyou-message.jpg"
                        width={4829}
                        height={3620}
                    />
                </>
            ) : (
                <>
                    <SectionTitle>
                        CONTACT<span> &nbsp;</span>ME
                    </SectionTitle>
                    {errorMessage ? (
                        <ErrorMessage>
                            Message was not sent. Try again please
                        </ErrorMessage>
                    ) : null}
                    <ContactFormContainer onSubmit={sendEmail}>
                        <FormNamesInputContainer>
                            <Inputcomponent
                                id="firstName"
                                type="text"
                                text="First Name"
                                componentType={formOptions.formInput}
                            />
                            <Inputcomponent
                                id="lastName"
                                type="text"
                                text="Last Name"
                                componentType={formOptions.formInput}
                            />
                        </FormNamesInputContainer>
                        <FormInformationContainer>
                            <Inputcomponent
                                id="email"
                                type="email"
                                text="Email"
                                componentType={formOptions.formInput}
                            />
                            <Inputcomponent
                                id="subject"
                                type="text"
                                text="Subject"
                                componentType={formOptions.formInput}
                            />
                            <Inputcomponent
                                id="message"
                                type="text"
                                text="Message"
                                componentType={formOptions.textArea}
                            />
                        </FormInformationContainer>
                        <ButtonContainer>
                            <Button text="SEND MESSAGE" />
                        </ButtonContainer>
                    </ContactFormContainer>
                </>
            )}
        </ContactContainer>
    );
};

export default ContactPage;
