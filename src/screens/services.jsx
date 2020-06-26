import React, {Fragment} from "react";
import {Col, Image, Row} from "react-bootstrap";


export default class ServicesScreen extends React.Component {
    render() {
        return (<Fragment>
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
        </Fragment>)
    }
}