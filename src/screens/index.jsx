import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import {Navbar, Nav, Row, Col, Button} from 'react-bootstrap'

import WhoAmIScreen from "./about.jsx";
import BlogScreen from "./blog.jsx";
import EntsScreen from "./ents.jsx";
import ServicesScreen from "./services.jsx";

function SelectedBackgroundStyle(currentPath, itemPath) {
    if (currentPath.startsWith(itemPath)) {
        return {backgroundColor: 'grey', borderRadius: "3px"}
    }
    return {}
}


function SelectedFontStyle(currentPath, itemPath) {
    if (currentPath.startsWith(itemPath)) {
        return {color: 'white', marginLeft: '7px',}
    }
    return {marginLeft: '7px'}
}


function IndexNavBar(props) {
    let currentPath = window.location.pathname;

    return (
        <ul className={'nav-head'}>
            <li className={'nav-head-item'} style={SelectedBackgroundStyle(currentPath, "/whoami/")}>
                <Link className={'nav-head-link'} to={"/whoami/"}
                      style={SelectedFontStyle(currentPath, "/whoami/")}>About me</Link>

            </li>
            <li className={'nav-head-item'}style={SelectedBackgroundStyle(currentPath, "/blog/")}>
                <Link className={'nav-head-link'} to={"/blog/"}
                      style={SelectedFontStyle(currentPath, "/blog/")}>Blog</Link>

            </li>
            <li className={'nav-head-item'} style={SelectedBackgroundStyle(currentPath, "/ents/")}>
                <Link className={'nav-head-link'} to={"/ents/"}
                      style={SelectedFontStyle(currentPath, "/ents/")}>Entertainments</Link>
            </li>
            <li className={'nav-head-item'} style={SelectedBackgroundStyle(currentPath, "/services/")}>
                <Link className={'nav-head-link'} to={"/services/"}
                      style={SelectedFontStyle(currentPath, "/services/")}>My Services</Link>

            </li>
        </ul>
    )
}

export default class IndexScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    navBar() {
        return (
            <div className="container-fluid">
                <Row className="show-grid">
                 <Col md={12} className="text-center">
                    <h1 className="text-center branding">Ex0</h1>
                     </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={12}  className="text-center">
                        <IndexNavBar/>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className='conent_div'>
                            <section className="b-content">
                                <Switch>
                                    <Route path={"/whoami/"} component={WhoAmIScreen}/>
                                    <Route path={"/blog/"} component={BlogScreen}/>
                                    <Route path={"/ents/"} component={EntsScreen}/>
                                    <Route path={"/services/"} component={ServicesScreen}/>
                                </Switch>
                            </section>
                        </div>

                    </Col>
                </Row>

            </div>
        )
    }

    render() {
        const content = this.navBar()
        return (content)
    }
}
