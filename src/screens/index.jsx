import React, {Fragment} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

import WhoAmIScreen from "./about.jsx";
import BlogScreen from "./blog.jsx";
import EntsScreen from "./ents.jsx";
import ServicesScreen from "./services.jsx";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter'
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin'

library.add(faTwitter, faGithub, faLinkedin);


export default class IndexScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props = props;
        this.navLinksBar = this.navLinksBar.bind(this);
    }

    componentDidMount() {
        // load default page
        if (!this.props.location.pathname){
            this.props.history.push("/whoami/");
        }
    }

    navLinksBar() {
        let linkBar = []
        let links = ['/whoami/', '/blog/', '/ents/', '/services/']
        let linksHead = {
            '/whoami/': 'About Me', '/blog/': 'Blog',
            '/ents/': 'Entertainments', '/services/': 'Services'
        }

        links.forEach(function (elem, index, array) {
            let classStyle = 'nav-head-link'
            if (this.props.location.pathname === elem) {
                classStyle = 'nav-head-link selected'
            }
            linkBar.push(
                <li className={'nav-head-item'} key={elem + '_li'}>
                    <Link className={classStyle} key={elem + '_link'} to={elem}>{linksHead[elem]}</Link>
                </li>
            )
        }.bind(this))
        return (
            <ul className={'custom-navbar'}>
                {linkBar}
            </ul>
        )
    }

    navBar() {
        return (
            <Fragment>
                <Row className="show-grid">
                    <Col md={12} className="text-center">
                        <h1 className="text-center branding">Ex0</h1>
                    </Col>
                </Row>
                <Row className="show-grid" className={'nav-head'}>
                    <Col md={12} className="text-center">
                        <this.navLinksBar/>
                    </Col>
                </Row>
            </Fragment>
        )
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
        const navBar = this.navBar()
        const footer = this.fooBar()
        return (
            <div className="container-fluid">
                {navBar}
                <Row>
                    <Col md={12}>
                        <section className="b-content">
                            <Switch>
                                <Route path={"/whoami/"} component={WhoAmIScreen}/>
                                <Route path={"/blog/"} component={BlogScreen}/>
                                <Route path={"/ents/"} component={EntsScreen}/>
                                <Route path={"/services/"} component={ServicesScreen}/>
                            </Switch>
                        </section>
                    </Col>
                </Row>
                {footer}
            </div>
        )
    }
}
