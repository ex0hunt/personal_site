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
        <Navbar bg={'light'} variant={'light'} expand={"sm"}>
            <Nav.Item style={SelectedBackgroundStyle(currentPath, "/whoami/")}>
                <Link to={"/whoami/"}
                      style={SelectedFontStyle(currentPath, "/whoami/")}>About me</Link>

            </Nav.Item>
            <Nav.Item style={SelectedBackgroundStyle(currentPath, "/blog/")}>
                <Link to={"/blog/"}
                      style={SelectedFontStyle(currentPath, "/blog/")}>Blog</Link>

            </Nav.Item>
            <Nav.Item style={SelectedBackgroundStyle(currentPath, "/ents/")}>
                <Link to={"/ents/"}
                      style={SelectedFontStyle(currentPath, "/ents/")}>Entertainments</Link>
            </Nav.Item>
            <Nav.Item style={SelectedBackgroundStyle(currentPath, "/services/")}>
                <Link to={"/services/"}
                      style={SelectedFontStyle(currentPath, "/services/")}>My Services</Link>

            </Nav.Item>
        </Navbar>
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
                 <div className={"branding"}>
                     <Col md={12} className="text-center">
                        <h1 className="text-center">Ex0</h1>
                         </Col>
                </div>
                </Row>
                <Row className="show-grid">
                    <Col md={12}>
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
