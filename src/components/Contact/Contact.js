import React, { useState } from "react";
// import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./Contact.css"


function Contact() {

        const [status, setStatus] = useState("");
        const handleSubmit = async (e) => {
            e.preventDefault();
            setStatus("Envoie...");
            const { name, email, message, objet } = e.target.elements;
            let details = {
                name: name.value,
                email: email.value,
                objet: message.value,
                message: message.value,
            };
            let response = await fetch("http://localhost:5000", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(details),
            });
            setStatus("");
            let result = await response.json();
            alert(result.status);
        };
    
        return (
            <div className="Coontact">
                <Container id="contact" fluid className="Contact">
                    <Row>

                        <section id="contact">
                            <div class="sectionheader">	<h1>CONTACT</h1></div>
                            <article>
                                <p>Salut toi qui passe par ici ! Si tu veut me contacter envoie moi un mail et je me ferais un plaisir de te répondre.</p>

                                <label for="checkcontact" class="contactbutton"><div class="mail"></div></label><input id="checkcontact" type="checkbox" />

                                <form  class="contactform" onSubmit={handleSubmit}>
                                    <p class="input_wrapper"><input type="text" name="name" id="contact_nom" required /><label for="contact_nom">NAME</label></p>
                                    <p class="input_wrapper"><input type="text" name="email" id="contact_email" required /><label for="contact_email">EMAIL</label></p>
                                    <p class="input_wrapper"><input type="text" name="objet" id="contact_sujet" required /><label for="contact_sujet">OBJET</label></p>
                                    <p class="textarea_wrapper"><textarea name="message" id="contact_message" required></textarea></p>
                                    <p class="submit_wrapper"><input type="submit" value="ENVOYER" /></p>
                                    <p id="status">{status}</p>
                                </form>
                            </article>
                        </section>
                    </Row>
                </Container>
            </div>

        );
    }
    export default Contact;
