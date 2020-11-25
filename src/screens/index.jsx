import React, {Fragment} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

import WhoAmIScreen from "./about.jsx";
import BlogScreen from "./blogIndex.jsx";
import EntsScreen from "./ents.jsx";
// import ServicesScreen from "./services.jsx";
import BlogEntity from "./blogEntity";


export default class IndexScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props = props;
        this.navLinksBar = this.navLinksBar.bind(this);
    }

    componentDidMount() {
        // load default page
        if (!this.props.location.pathname || this.props.location.pathname === '/') {
            this.props.history.push("/whoami/");
        }
    }

    navLinksBar() {
        let linkBar = []
        let links = ['/whoami/', '/blog/', '/ents/']
        let linksHead = {
            '/whoami/': 'About Me', '/blog/': 'Blog',
            '/ents/': 'Entertainments'
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
                        <h1 className="display-4 branding">Ex0</h1>
                    </Col>
                </Row>
                <Row className={'show-grid nav-head'}>
                    <input id="menu__toggle" type="checkbox"/>
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>

                    <Col md={12} className="text-center nav-links">
                        <this.navLinksBar/>
                    </Col>
                </Row>
            </Fragment>
        )
    }


    render() {
        const navBar = this.navBar()
        return (
            <div className="container-fluid">
                {navBar}
                <Row>
                    <Col md={12}>
                        <section className="b-content">
                            <Switch>
                                <Route path={"/whoami/"} component={WhoAmIScreen}/>
                                <Route path={"/blog/post/:slug/"} component={BlogEntity} />
                                <Route path={"/blog/"} component={BlogScreen}/>
                                <Route path={"/ents/"} component={EntsScreen}/>
                                {/*<Route path={"/services/"} component={ServicesScreen}/>*/}
                            </Switch>
                        </section>
                    </Col>
                </Row>
            </div>
        )
    }
}
