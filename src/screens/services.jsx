import React from "react";
import {Table} from "react-bootstrap";


export default class ServicesScreen extends React.Component {
    render() {
        return (<div className={"container"}>
            <Table striped responsive="sm" className={'services-table'}>
                <tbody>
                <tr>
                    <td><h4><b><a href={'https://pst.exo.icu/'} target={"_blank"}>PST</a></b></h4></td>
                    <td><h4>simple paste service</h4></td>
                </tr>
                <tr>
                    <td><h4><b><a href={'https://q3.exo.icu/'} target={"_blank"}>Q3</a></b></h4></td>
                    <td><h4>Quake3 server</h4></td>
                </tr>
                </tbody>
            </Table>
        </div>)
    }
}