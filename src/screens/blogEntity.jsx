import React from "react";
import {Link} from "react-router-dom";
import '../styles/App.css'
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
        BlogFetcher(`/api/blog/rest/entities/${this.props.match.params.slug}/`, 'GET', this.handleData)
    }

    formatDateTime(timeString) {
        let dateObj = new Date(timeString);
        return `${("0" + dateObj.getDate()).slice(-2)}/${("0" + (dateObj.getMonth() + 1)).slice(-2)}/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`
    }

    render() {
        if (this.state.loading) {
            return null
        }
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
                <div className="card-title"><Link to={`/`}>{this.state.data.title}</Link></div>
                <div className="card-preview">{this.state.data.text}</div>
                <div className="card-footer">
                    {dates}
                </div>
            </div>
                )
    }

}
