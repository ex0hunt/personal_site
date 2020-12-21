import React, {Fragment} from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import {Col, Row} from 'react-bootstrap'

import WhoAmIScreen from "./about.jsx";
import BlogScreen from "./blogIndex.jsx";
import EntsScreen from "./ents.jsx";
// import ServicesScreen from "./services.jsx";
import BlogEntity from "./blogEntity";


export default class IndexScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menuOpen: false};
        this.props = props;
        this.showMenu = this.showMenu.bind(this)
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    onRouteChanged() {
        this.setState({menuOpen: false})
    }


    showMenu(event) {
        let state = !this.state.menuOpen
        this.setState({menuOpen: state})
    }

    navBar() {
        return (
            <div className={"header"}>
                <div className="branding">
                    <h1>Ex0</h1>
                </div>
                <Row className={'show-grid nav-head'}>
                    <input id="menu__toggle" type="checkbox" checked={this.state.menuOpen} onClick={this.showMenu}/>
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>

                    <Col md={12} className="text-center nav-links">
                        <this.navLinksBar/>
                    </Col>
                </Row>
            </div>
        )
    }


    render() {
        const navBar = this.navBar()
        return (
            <Fragment>
                {navBar}
                <div className="container-fluid">
                    <section className="b-content">
                        <Switch>
                            <Route path={"/whoami/"} component={WhoAmIScreen}/>
                            <Route path={"/blog/post/:slug/"} component={BlogEntity}/>
                            <Route path={"/blog/"} component={BlogScreen}/>
                            <Route path={"/ents/"} component={EntsScreen}/>
                            {/*<Route path={"/services/"} component={ServicesScreen}/>*/}
                        </Switch>
                    </section>

                </div>
            </Fragment>
        )
    }
}
