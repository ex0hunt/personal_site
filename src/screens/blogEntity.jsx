/* tslint:disable */

import React from "react";
import ReactGA from "react-ga";
import {Link} from "react-router-dom";
import BlogFetcher from "../tools/blogFetcher";
import {Helmet} from "react-helmet";

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
        ReactGA.set({page: this.props.location.pathname});
        ReactGA.ga("send", "pageview");

        BlogFetcher(`/api/blog/rest/entities/${this.props.match.params.slug}/`, 'GET', this.handleData)
    }

    formatDateTime(timeString) {
        let dateObj = new Date(timeString);
        return `${("0" + dateObj.getDate()).slice(-2)}/${("0" + (dateObj.getMonth() + 1)).slice(-2)}/${dateObj.getFullYear()} ${('0' + dateObj.getHours()).slice(-2)}:${('0' + dateObj.getMinutes()).slice(-2)}`
    }

    render() {
        if (this.state.loading) {
            return null
        }
        const parse = require('html-react-parser');
        let dates = <div className="card-creation_date">{this.formatDateTime(this.state.data.creation_date)}</div>;
        const canonical_url = `http://exo.icu/blog/post/${this.props.match.params.slug}/`
        if (this.formatDateTime(this.state.data.edit_date) !== this.formatDateTime(this.state.data.creation_date)) {
            dates = <React.Fragment>
                <div className="card-creation_date">{this.formatDateTime(this.state.data.creation_date)}</div>

                <div className="card-edit_date">(updated at: {this.formatDateTime(this.state.data.edit_date)})
                </div>

            </React.Fragment>
        }
        const schema = {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org", "@type": "BlogPosting",
                author: {
                    "@type": "Person",
                    name: "Dmitry",
                    alternateName: "Ex0",
                    email: "inbox@exo.icu"
                },
                publisher: {
                    "@type": "Organization",
                    name: "Ex0.icu",
                    logo: {
                        "@type": "ImageObject",
                        url: "http://exo.icu/public/media/logo.png"
                    }
                },
                name: this.state.data.title,
                headline: this.state.data.title,
                keywords: this.state.data.tags,
                image: "http://exo.icu/public/media/logo.png",

                datePublished: this.state.data.creation_date,
                dateModified: this.state.data.edit_date,

                mainEntityOfPage: this.state.data.tags[0]

            }),
        }
        let tmpDiv = document.createElement("div");
        tmpDiv.innerHTML = this.state.data.text.slice(0, 40);
        let entityDescr = tmpDiv.textContent + "..." || tmpDiv.innerText + "..." || ""

        return (
            <React.Fragment>
                <Helmet script={[schema]}>
                    <meta charSet="utf-8"/>
                    <title>Ex0::Blog::{this.state.data.title}</title>
                    <link rel="canonical" href={canonical_url}/>
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:title" content={this.state.data.title}/>
                    <meta name="twitter:description" content="Ex0 :: Blog"/>
                    <meta name="twitter:creator" content="@ex0hunt"/>
                    <meta name="twitter:image" content="http://exo.icu/public/media/logo.png"/>

                    <meta property="og:title" content={this.state.data.title}/>
                    <meta property="og:site_name" content="Ex0 :: Blog"/>
                    <meta property="og:description" content={entityDescr}/>
                    <meta property="og:image" content="http://exo.icu/public/media/logo.png"/>
                    <meta property="og:url" content="https://exo.icu/blog/"/>
                    <meta property="og:type" content="website"/>
                </Helmet>
                <div className="content-card content-background">
                    <div className="card-title"><Link to={`/blog/`}>{this.state.data.title}</Link></div>
                    <div className="card-preview">{parse(this.state.data.text)}</div>
                    <div className="card-footer">
                        {dates}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
