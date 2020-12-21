/* tslint:disable */

import React from "react";
import {Link} from "react-router-dom";
import BlogFetcher from "../tools/blogFetcher";
import ReactGA from "react-ga";
import {Helmet} from "react-helmet";
import '../css/blog.css';

export default class BlogScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };

        this.handleData = this.handleData.bind(this);
        this.entityCards = this.entityCards.bind(this);
        this.pagesNav = this.pagesNav.bind(this);
        this.getPage = this.getPage.bind(this);
    }

    handleData(data) {
        this.setState({loading: false, data: data})
    }

    fetchData() {
        const qs = this.props.location.search
        BlogFetcher(`/api/blog/rest/entities/${qs}`, 'GET', this.handleData)
    }

    componentDidMount() {
        ReactGA.set({page: this.props.location.pathname + this.props.location.search});
        ReactGA.ga("send", "pageview");

        this.fetchData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.location.key !== this.props.location.key) {
            this.fetchData()
        }
    }

    formatDateTime(timeString) {
        let dateObj = new Date(timeString);
        return `${("0" + dateObj.getDate()).slice(-2)}/${("0" + (dateObj.getMonth() + 1)).slice(-2)}/${dateObj.getFullYear()} ${('0' + dateObj.getHours()).slice(-2)}:${('0' + dateObj.getMinutes()).slice(-2)}`
    }

    entityCards() {
        let cards = [];
        const parse = require('html-react-parser');
        for (let i = 0; i < this.state.data.results.length; i++) {
            const item = this.state.data.results[i];
            let dates = <div className="card-creation_date">{this.formatDateTime(item.creation_date)}</div>;
            if (this.formatDateTime(item.edit_date) !== this.formatDateTime(item.creation_date)) {
                dates = <React.Fragment>
                    <div key={'cdate__' + item.slug}
                         className="card-creation_date">{this.formatDateTime(item.creation_date)}</div>

                    <div key={'update__' + item.slug}
                         className="card-edit_date">(updated at: {this.formatDateTime(item.edit_date)})
                    </div>

                </React.Fragment>
            }
            let tags = [];
            for (let i = 0; i < item.tags.length; i++) {
                tags.push(
                    <div key={`entity_tag__${item.slug}_${i}`}>
                        <Link to={`/blog/?tags=${item.tags[i]}`}>{item.tags[i]}</Link>
                    </div>
                )
            }

            cards.push(<div key={item.slug} className="content-card content-background">
                <div key={'card_title__' + item.slug} className="card-title"><Link
                    to={`/blog/post/${item.slug}/`}>{item.title}</Link></div>
                <div key={'card_prev__' + item.slug} className="card-preview">{parse(item.preview)}</div>
                <div key={'card_footer__' + item.slug} className="card-footer">
                    <div key={'taglist__' + item.slug} className={'card-taglist'}>
                        {tags}
                    </div>
                    {dates}
                </div>
            </div>)
        }
        return cards
    }

    getPage(event) {
        if (event.target.id === 'next') {
            BlogFetcher(this.state.data.next, 'GET', this.handleData)
        }
        if (event.target.id === 'prev') {
            BlogFetcher(this.state.data.previous, 'GET', this.handleData)
        }
    }

    pagesNav() {
        const nextPage = this.state.data.next;
        const prevPage = this.state.data.previous;

        let result = [];
        if (prevPage) {
            result.push(<div className='prevPage'><Link id={'prev'} to={'#'} onClick={this.getPage}>
                &lt;-- </Link></div>)
        }
        if (nextPage) {
            result.push(<div className='nextPage'><Link id={'next'} to={'#'} onClick={this.getPage}>--&gt;</Link></div>)
        }
        return <div className='paginator'>{result}</div>
    }

    render() {
        if (this.state.loading) {
            return null
        }
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Ex0::Blog</title>
                    <link rel="canonical" href="http://exo.icu/blog/"/>
                </Helmet>
                <div className={"card-list"}>{this.entityCards()}</div>
                {this.pagesNav()}
            </React.Fragment>
        )
    }
}