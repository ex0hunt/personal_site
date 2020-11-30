import React, {Fragment} from "react";
import {Col, Image, Row} from "react-bootstrap";
import ReactGA from "react-ga";


export default class EntsScreen extends React.Component {
    componentDidMount() {
        ReactGA.set({page: this.props.location.pathname});
        ReactGA.ga("send", "pageview");
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Col md={12} className={'warning'}>
                        <h1>⚠ Under construction ⚠</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className={'warning'}>
                        <Image src={"https://exo.icu/public/media/warn.gif"}></Image>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}