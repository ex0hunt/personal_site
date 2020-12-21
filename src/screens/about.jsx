import React, {Fragment} from "react";
import {Col, Image, Row} from 'react-bootstrap'
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter'
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin'
import ReactGA from "react-ga";

import '../css/about.css';

library.add(faTwitter, faGithub, faLinkedin);


export default class WhoAmIScreen extends React.Component {

    yearsCount() {
        let timeNow = new Date();
        let timeBirth = new Date(Date.parse("1990-07-23"));
        let yearsCount = 0;

        yearsCount = timeNow.getFullYear() - timeBirth.getFullYear();
        if (timeNow.getMonth() < timeBirth.getMonth()) {
            yearsCount -= 1;
        } else if (timeNow.getMonth() === timeBirth.getMonth() && timeNow.getDate() < timeBirth.getDate()) {
            yearsCount -= 1;
        }
        return yearsCount
    }

    componentDidMount() {
        ReactGA.set({page: this.props.location.pathname});
        ReactGA.ga("send", "pageview");
    }

    fooBar() {
        return (
            <div className="social-panel">
                <div className="text-center social-item">
                    <a href="https://github.com/ex0hunt"
                       target="_blank" className="social-link"><FontAwesomeIcon
                        icon={["fab", "github"]}/> GitHub</a>
                </div>
                <div className="text-center social-item">
                    <a href="https://www.linkedin.com/in/dmitry-katargin-44a36250"
                       target="_blank" className="social-link"><FontAwesomeIcon
                        icon={["fab", "linkedin"]}/> LinkedIn</a>
                </div>
                <div className="text-center social-item">
                    <a href="https://twitter.com/ex0hunt"
                       target="_blank" className="social-link"><FontAwesomeIcon
                        icon={["fab", "twitter"]}/> Twitter</a>
                </div>
            </div>
        )
    }

    render() {
        const footer = this.fooBar()
        const schema = {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org", "@type": "Person",
                name: "Dmitry",
                alternateName: "Ex0",
                birthDate: "23.07.1990",
                email: "inbox@exo.icu",
                gender: "male",
                homeLocation: "Russia",
                jobTitle: "Software Developer",
                worksFor: "MY.GAMES",
                knowsAbout: ["Python", "GoLang", "K8S", "Linux"]
            }),
        }

        return (
            <Fragment>
                <Helmet script={[schema]}>
                    <meta charSet="utf-8"/>
                    <title>Ex0::About Me</title>
                    <link rel="canonical" href="http://exo.icu/whoami/"/>

                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:title" content="Ex0"/>
                    <meta
                        name="twitter:description"
                        content="Dmitry K :: Software Developer"
                    />
                    <meta name="twitter:creator" content="@ex0hunt"/>
                    <meta
                        name="twitter:image"
                        content="http://exo.icu/public/media/logo.png"
                    />

                    <meta property="og:title" content="EXO"/>
                    <meta property="og:site_name" content="Some pages"/>
                    <meta property="og:description" content="Dmitry K, Software Developer"/>
                    <meta property="og:image" content="http://exo.icu/public/media/logo.png"/>
                    <meta property="og:url" content="https://exo.icu"/>
                    <meta property="og:type" content="website"/>
                </Helmet>

                <Row>
                    <Col md={{offset: 2, span: 2}}>
                        <Image src="https://exo.icu/public/media/avatar.webp" rounded fluid/>
                    </Col>
                    <Col md={6}>
                        <p><code>Hello there👋, my names is Dmitry. I am a <span>{this.yearsCount()}</span>-years-old
                            russian software developer at <a href={"https://my.games"} target={"_blank"}>MY.GAMES team
                                (Mail.ru Group)</a>.
                            I enjoy making web stuff (like this page) and playing video games 🙂</code></p>

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
                            ‍💻 Previously I worked at small start-up teams as <code>QA Engineer -> Python
                            developer</code> and graduated from Taganrog State
                            Radio Technical University.
                        </p>
                        <p>
                            🎧 I listen technical podcasts for improving my professional skills. Some of them:
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
                            🧪 I enjoy doing research and studying new technologies. Now I’m trying to
                            learn <code>Kotlin</code> to write something for my phone 😏
                        </p>
                        <p>
                            🎮 I work in game industry and love playing games on my PC and Nintendo Switch, especially
                            Overwatch and Pokemon Sword
                        </p>
                    </Col>
                </Row>

                {footer}
            </Fragment>
        )
    }
}