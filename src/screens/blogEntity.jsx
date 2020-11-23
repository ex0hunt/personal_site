import React from "react";
import ReactGA from "react-ga";
import {Link} from "react-router-dom";
import BlogFetcher from "../tools/blogFetcher";

export default class BlogEntity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };

        this.handleData = this.handleData.bind(this);
    }

    handleData(data) {
        this.setState({loading: false, data: data})
    }

    componentDidMount() {
        ReactGA.set({ page: this.props.location.pathname});
        ReactGA.ga("send", "pageview");

        BlogFetcher(`/api/blog/rest/entities/${this.props.match.params.slug}/`, 'GET', this.handleData)
    }

    formatDateTime(timeString) {
        let dateObj = new Date(timeString);
        return `${("0" + dateObj.getDate()).slice(-2)}/${("0" + (dateObj.getMonth() + 1)).slice(-2)}/${dateObj.getFullYear()} ${('0'+dateObj.getHours()).slice(-2)}:${('0'+dateObj.getMinutes()).slice(-2)}`
    }

    render() {
        if (this.state.loading) {
            return null
        }
        const parse = require('html-react-parser');
        let dates = <div className="card-creation_date">{this.formatDateTime(this.state.data.creation_date)}</div>;
            if (this.formatDateTime(this.state.data.edit_date) !== this.formatDateTime(this.state.data.creation_date)) {
                dates = <React.Fragment>
                    <div className="card-creation_date">{this.formatDateTime(this.state.data.creation_date)}</div>

                    <div className="card-edit_date">(updated at: {this.formatDateTime(this.state.data.edit_date)})
                    </div>

                </React.Fragment>
            }
        return (
            <div className="content-card content-background">
                <div className="card-title"><Link to={`/blog/`}>{this.state.data.title}</Link></div>
                <div className="card-preview">{parse(this.state.data.text)}</div>
                <div className="card-footer">
                    {dates}
                </div>
            </div>
                )
    }

}
