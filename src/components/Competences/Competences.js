import React from 'react';
import SkillBar from 'react-skillbars';
// import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./Competences.css"

function Competences() {
    const SKILLS = [
        {
            "type": "HTML",
            "level": 95
        },
        {
            "type": "CSS",
            "level": 90
        },
        {
            "type": "SQL",
            "level": 70
        },
        {
            "type": "Javascript",
            "level": 60
        },
        {
            "type": "React",
            "level": 40
        },
        {
            "type": "PHP",
            "level": 90
        },
        {
            "type": "laravel",
            "level": 30
        },
        {
            "type": "Symfony",
            "level": 35
        }
    ]
    const colors = {
        "bar": "#BFB7A7",
        "title": {
            "text": "#BFB7A7",
            "background": "black"
        }
    }
    return (
        <Container fluid className="competences" id="competence">
            <Row className="justify-content-center">
                <Col fluid>
            <h1>Langage utilisé</h1>
                    <div className="skills">
                        <SkillBar skills={SKILLS} colors={colors} animationDuration={7000} />
                    </div>
                </Col>
            </Row>
            <br />
            <h1>Projets</h1>
            <br />
            <br />
            <Row className="justify-content-center">
                <Col fluid>
                    <figure class="image-block">
                        <h2>Twitter</h2>
                        <div className="projet">
                        <img src="Twitter.png" alt="" />
                        </div>
                        <figcaption>
                            <h3>Plus d'infos</h3>
                            <p>Projet twitter d'une durée d'un mois à réaliser en groupes de 4, ce projet avait pour but de refaire les fonctionnalités de twitter tel que l'inscription, la connexion implémentée un système de tweet, faire une page Profil, accueille etc.</p>
                        </figcaption>
                    </figure>
                </Col>
                <Col>
                    <figure class="image-block">
                        <h2>Puissance 4</h2>
                        <div className="projet">
                        <img className="img-fluid" src="Puissance4.png" alt="" />
                        </div>
                        <figcaption>
                            <h3>Plus d'infos</h3>
                            <p>Projet Puissance 4 d'une durée de deux semaines, ce projet avait pour but de réaliser un jeu en utilisant la librairie jQuery reprenant les règles du célèbre jeu Puissance 4.</p>
                        </figcaption>
                    </figure>
                </Col>
                <Col>
                    <figure class="image-block">
                        <h2>Spotify</h2>
                        <div className="projet">
                        <img src="Spotify.png" alt="" />
                        </div>
                        <figcaption>
                            <h3>Plus d'infos</h3>
                            <p>Projet Spotify d'une durée de 2 jours, ce Projet était un rush de 2 jours étendu sur un week-end, 
                                pour ce projet nous devions créer une API et le site Spotify avec certaine de ses fonctionnalités comme l'écoute de musique, 
                                la recherche d'album, d'artistes, et de genres de musique.</p>
                        </figcaption>
                    </figure>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col fluid>
                    <figure className="image-block">
                        <h2>Meetic</h2>
                        <div className="projet">
                        <img src="Meetic.png" alt="" />
                        </div>
                        <figcaption>
                            <h3>Plus d'infos</h3>
                            <p>Projet meetic d'une durée de deux semaines, le but est de créer un site de rencontre à la manière d'un meetic. Ajouts de fonctionnalités comme inscriptio, connexion, profil. Nous devions aussi créer une BDD. Projet effectué en PHP orienté objet.</p>
                        </figcaption>
                    </figure>
                </Col>
                <Col>
                    <figure className="image-block">
                        <h2>Snapchat</h2>
                        <div className="projet">
                        <img className="img-fluid" src="Snap.png"  alt="" />
                        </div>
                        <figcaption>
                            <h3>Plus d'infos</h3>
                            <p>Projet Snapchat d'une durée de une semaine, le but etait de créer une application mobile qui envoie des images à ses amis pour un certain laps de temps, puis qui se supprime par la suite. Ajouts aussi de la connexion et l'inscription, profil, ce projet est a réaliser avec REACT et EXPO. </p>
                        </figcaption>
                    </figure>
                </Col>
                <Col>
                    <figure className="image-block">
                        <h2>Quizz</h2>
                        <div className="projet">
                        <img src="Quizz.png" alt="" />
                        </div>
                        <figcaption>
                            <h3>Plus d'infos</h3>
                            <p>Projet My quizz d'une durée de deux semaines en groupe de 2 à 3, le but etait de dévelloper un site qui permet de tester sa culture générale à travers des quiz. ce projet contiens aussi un coter inscription, connexion, profil et un coté admin pour gérer le site. Ce projet à été realisé en Symfony.</p>
                        </figcaption>
                    </figure>
                </Col>
            </Row>
        </Container>
    );
}

export default Competences;