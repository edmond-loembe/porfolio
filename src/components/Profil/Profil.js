import React from 'react';
// import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./Profil.css";
import Typewriter from 'typewriter-effect';


function Profil() {

    return (

        <Container id="profil" fluid className="profil">
            <Row>
                <Col>
                    <svg viewBox="0 0 1450 600">
                        <text x="50%" y="50%" fill="transparent" text-anchor="middle">
                            EDMOND LOEMBE
                    </text>
                    </svg>
                </Col>
            </Row>
            <Row fluid>
                <Col fluid>
                <div className="typewriter">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('❝ Cela semble toujours impossible, jusqu\'à ce qu\'on le fasse. Nelson Mandela ❞')
                                .pauseFor(2500)
                                .start();
                        }}
                    />
                </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Profil;