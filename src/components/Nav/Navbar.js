import React from 'react';
// import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import "./Navbar.css"
import {smooth} from "react-scroll";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import ReactDOM from 'react-dom'
// import { instagram } from '@fortawesome/free-solid-svg-icons'



// ReactDOM.render(element, document.body)


function NavB() {

    return (
        <Navbar className="Nave" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid id="home">
                    <Navbar.Brand className="moi" href="#home"><img className="img-fluid" src={'photo.jpg'} /></Navbar.Brand>
                {/* <Nav.Link><img className="img-fluid" src={'full-moon.png'}/></Nav.Link> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbar-nav ml-auto">
                        <Nav.Link className="navv" href="#profil">Profil</Nav.Link>
                        <Nav.Link className="navv" href="#bio">À propos de moi</Nav.Link>
                        <Nav.Link className="navv" href="#competence" smooth={true}>Langage/Projets</Nav.Link>
                        <Nav.Link className="navv" href="#contact">Contacts</Nav.Link>

                        <Nav.Link className="imgg" href="https://www.instagram.com/edmond_l.s/?hl=fr"><img className="img-fluid" src={'logo-instagram.png'} /></Nav.Link>
                        <Nav.Link className="imgg" href="https://www.facebook.com/edmond.loembe.5"><img className="img-fluid" src={'logo-facebook.png'} /></Nav.Link>
                        <Nav.Link className="imgg" href="https://twitter.com/edmondloembe"><img className="img-fluid" src={'logo-twitter.png'} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavB;
