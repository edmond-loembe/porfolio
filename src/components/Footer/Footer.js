import React from "react";
import "./Footer.css";
import { Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





const Footer = () => {
    return (
        <Container fluid id="footer" className="fouter">
            <footer class="bg-dark text-center text-white">
                <div class="container p-4 pb-0">
                    <section class="mb-4" className="section">
                        <div className="logoo">
                        <Nav.Link className="logo" href="https://www.instagram.com/edmond_l.s/?hl=fr"><img className="img-fluid" src={'logo-instagram.png'} /></Nav.Link>
                        <Nav.Link className="logo" href="https://www.facebook.com/edmond.loembe.5"><img className="img-fluid" src={'logo-facebook.png'} /></Nav.Link>
                        <Nav.Link className="logo" href="https://twitter.com/edmondloembe"><img className="img-fluid" src={'logo-twitter.png'} /></Nav.Link>
                        <Nav.Link className="logo" href="https://www.linkedin.com/in/edmond-loembe-24ba75206/"><img className="img-fluid" src={'logo-linkedin.png'} /></Nav.Link>
                        <Nav.Link className="logo" href="https://github.com/edmond-loembe"><img className="img-fluid" src={'logo-github.png'} /></Nav.Link>
                        </div>
                    </section>
                </div>

                <div class="text-center p-3">
                    © 2021 Copyright:
    <a className="copy" class="text-white" href="#">edmondloembe.com</a>
                </div>
            </footer>
        </Container>
    );
};
export default Footer;
