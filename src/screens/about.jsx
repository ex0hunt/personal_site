import React, {Fragment} from "react";
import {Row, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter'
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin'

library.add(faTwitter, faGithub, faLinkedin);


export default class WhoAmIScreen extends React.Component {

    yearsCount() {
        let timeNow = new Date();
        let timeBirth = new Date(Date.parse("1990-07-23"));
        let yearsCount = 0;

        yearsCount = timeNow.getFullYear() - timeBirth.getFullYear();
        ;
        if (timeNow.getMonth() < timeBirth.getMonth()) {
            yearsCount -= 1;
        } else if (timeNow.getMonth() === timeBirth.getMonth() && timeNow.getDate() < timeBirth.getDate()) {
            yearsCount -= 1;
        }
        return yearsCount
    }

    fooBar() {
        return (
            <Row className="show-grid">
                <Col md={12} className="text-center">
                    <ul className={'nav-foo'}>
                        <li className={'nav-foo-item'}>
                            <a href="https://github.com/ex0hunt" className={'nav-foo-link'}
                               target="_blank"><FontAwesomeIcon icon={["fab", "github"]}/> GitHub</a>
                        </li>
                        <li className={'nav-foo-item'}>
                            <a href="https://www.linkedin.com/in/dmitry-katargin-44a36250" className={'nav-foo-link'}
                               target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]}/> LinkedIn</a>
                        </li>
                        <li className={'nav-foo-item'}>
                            <a href="https://twitter.com/ex0hunt" className={'nav-foo-link'}
                               target="_blank"><FontAwesomeIcon icon={["fab", "twitter"]}/> Twitter</a>
                        </li>
                    </ul>
                </Col>
            </Row>
        )
    }

    render() {
        const footer = this.fooBar()

        return (
            <Fragment>
                <Row>
                    <Col md={{offset: 2, span: 2}}>
                        <img className="rounded img-fluid" src="https://exo.icu/public/media/avatar.jpeg"/>
                    </Col>
                    <Col md={6}>
                        <p><code>Hello there👋, my names is Dmitry. I am a <span>{this.yearsCount()}</span> years old
                            russian software developer at <a href={"https://my.games"} target={"_blank"}>MY.GAMES team (Mail.ru Group)</a>.
                            I love make some web stuff (like this page) and play video games 🙂</code></p>

                        <h5>My Skills</h5>
                        <ul id="skill-list">
                            <li>Analytical skills</li>
                            <li>Backend development (django, drf, golang)</li>
                            <li>Front-end development (react, vue)</li>
                            <li>DevOps (docker, kubernetes+helm)</li>
                            <li>Design process</li>
                            <li>Linux-based system administrator</li>
                            <li>Teamwork</li>
                        </ul>
                        <br/><br/>
                        <h4>More...</h4>
                        <p>
                            ‍💻 Before now , I worked at small start-up teams as <code>QA Engineer -> Python developer</code> and graduated from Taganrog State
                            Radio
                            Technical University.
                        </p>
                        <p>
                            🎧 I like listen some russian technical podcasts for grow up my skills. Some of them:
                            <ul id="skill-list">
                                <li><b><a
                                    href={"https://podcasts.google.com/feed/aHR0cHM6Ly9iZWFyZHljYXN0LmxpYnN5bi5jb20vcnNz"}>BeardyCast</a></b> -
                                    IT, media, gadgets
                                </li>
                                <li><b><a
                                    href={"https://podcasts.google.com/feed/aHR0cHM6Ly9wb2RzdGVyLmZtL3Jzcy54bWw_cGlkPTU3NjY1"}>EveryPod</a></b> -
                                    tech and video games talks
                                </li>
                                <li><b><a
                                    href={"https://podcasts.google.com/feed/aHR0cHM6Ly9yYWRpby10LmNvbS9wb2RjYXN0LWFyY2hpdmVzLnJzcw"}>Radio-T</a></b> -
                                    IT, development
                                </li>
                                <li><b><a
                                    href={"https://podcasts.google.com/feed/aHR0cHM6Ly9wY3IuYXBwbGUuY29tL2lkMTEzMjMzMTA4MA"}>The
                                    Big Beard Theory</a></b> - scientific talks (all about Space and Universe!)
                                </li>
                                <li><b><a
                                    href={"https://podcasts.google.com/feed/aHR0cHM6Ly96YXZ0cmFjYXN0LnJ1L2ZlZWQvcG9kY2FzdA"}>ZavtraCast</a></b> -
                                    media, some news
                                </li>
                            </ul>
                        </p>
                        <p>
                            🧪 Also love do some research or learn new technologies. Now I try to learn <code>Kotlin</code> language
                            because I want to write something for my phone 😏
                        </p>
                        <p>
                            🎮 I work in game industry and of course I love play some games on my PC and Nintendo Switch,
                            like a Overwatch and Pokemon Sword
                        </p>
                    </Col>
                </Row>

                {footer}
            </Fragment>
        )
    }
}