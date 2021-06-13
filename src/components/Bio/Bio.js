import React from 'react';
// import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./Bio.css"

function Bio() {

    return (
        <Container fluid className="bio" id="bio">
            <Row fluid className="justify-content-center">
                <Col fluid>
                    <br />
                    <h2><u>Edmond Loembe :</u></h2>

                    <p>Jai 23 ans, je suis née à Senlis dans L'oise (60), actuelment je vie a villeron dans le val d'oise (95), Je suis d'origine franco-congolais. J'ai eu la chance de pouvoir vivre à l'étranger
                    (Tunisie et Guadeloupe) ce qui m'a permis de découvrir des cultures et des territoires différents;
                    autant de sources d'inspiration propres aux lieux. J'ai eu une éducation pas comme les autres, en effet très jeune, j'ai eu une autonomie car c'est qu'à partir de la CM1 que j'ai connu le cursus scolaire.                    
                    En Tunisie comme en Guadeloupe, c'est mes parents qui me faisaient l'école ! j'ai donc cette faciliter à étudier peu importe la localisation et je suis très ouvert aux personnes !
                        </p>
                </Col>
                <Col xs={6} fluid>
                    <div className="moii">
                        <ul>
                            <li class="content__item">
                                <button class="button button--calypso"><span><a href="Edmond.png">VOIR MON CV</a></span></button>
                            </li>
                            <h1>ou</h1>
                            <li>
                            <button class="button button--calypso"><span><a href="edmond.pdf" download>TÉLÉCHARGER MON CV</a></span></button>
                            </li>
                        </ul>
                        {/* <a className="btn" href="Edmond.png" target="_blank"></a>
                        <a className="btn2" href="edmond.pdf" download></a> */}
                    </div>
.
                </Col>
                <Col fluid>
                    <br />
                    <h2><u>Développeur web full stack :</u></h2>
                    <p>Développeur web en formation à la Web@cademie By EPITECH depuis novembre 2020,
                    après une piscine de 3 semaines, j'ai commencé ma formation de 2 ans en tant que développeur web.
                    Pendant cette période je vais accomplir une multitude de projet en différents langages de programmation tel que PHP et ses frameworks comme Symfony et Laravel,
                    Javascript et React, utiliser Github comme
                    plateforme de dépôts. J'ai aussi utiliser SQL comme entremetteur pour faire des requêtes, interagire avec une BDD,
                    créé une BDD, gérer l'administration d'un site. tout cela en 1 an.
                    Au cours de ma deuxième année, je vais être en alternance de 6 à 14 mois pour avoir une expérience professionnelle.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
export default Bio;