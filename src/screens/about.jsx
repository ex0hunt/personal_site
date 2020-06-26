import React, {Fragment} from "react";
import {Row, Col} from 'react-bootstrap'

export default class WhoAmIScreen extends React.Component {

    yearsCount(){
        let timeNow = new Date();
        let timeBirth = new Date(Date.parse("1990-07-23"));
        let yearsCount = 0;

        yearsCount = timeNow.getFullYear() - timeBirth.getFullYear();;
        if (timeNow.getMonth()<timeBirth.getMonth()){
            yearsCount -= 1;
        }
        else if (timeNow.getMonth() === timeBirth.getMonth() && timeNow.getDate()<timeBirth.getDate()){
            yearsCount -= 1;
        }
        return yearsCount
    }
    render() {
        return(
            <Fragment>
                <Row>
                    <Col md={{offset: 2, span: 2}}>
                        <img className="rounded img-fluid" src="https://whoami.exo.icu/avatar.jpeg"/>
                    </Col>
                    <Col md={6}>
                        <h3>Introduction</h3>
                        <p><code>Hello there👋, my names is Dmitry. I am a <span>{this.yearsCount()}</span> years old russian software developer with
                            science and python background.</code></p>
                        <p>I love to spend my free time renovating my home, talk with interesting people, searching
                            something new in development.
                            I love scifi and cyberpunk.</p>
                        <h3>My Skills</h3>
                        <ul id="skill-list">
                            <li>Analytical skills</li>
                            <li>Backend development (django, drf, golang)</li>
                            <li>Front-end development (react, vue)</li>
                            <li>DevOps (docker, kubernetes+helm)</li>
                            <li>Design process</li>
                            <li>Linux-based system administrator</li>
                            <li>Teamwork</li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col md={{offset: 4, span: 6}}>
                        <h3>More...</h3>
                        <p>
                            I have studied information security but have always been interested in software development.
                            And, I think, found "holy grail" - writing safe code, without vulnerabilities :)
                            I'm highly energetic and motivated person and I love to work as a member of a team. I especially
                            enjoy working with changing projects and taking them forward with rapid pace but high precision.
                            I am talkative and sociable but also can concentrating on detailed work like programming.
                        </p>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}