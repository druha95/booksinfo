/**
 * Created by andrew on 29.10.15.
 */

var React = require('react/addons');
var $ = require('jquery');


var BookItem = React.createClass({
    getInitialState: function() {
        return {
            book: {
                autors: [],
                genre: [],
                name: ''
            },
            authors: [],
            genres: []
        };
    },

    componentDidMount: function() {
        $.get('../authors.json', function(result) {
            if (this.isMounted()) {
                this.setState({
                    authors: result.authors
                });
            }
        }.bind(this));

        $.get('../genres.json', function(result) {
            if (this.isMounted()) {
                this.setState({
                    genres: result.genres
                });
            }
        }.bind(this));

        this.setState({
            bookId: this.props.params.bookId
        });

        $.get('../books.json', function(result) {
            if (this.isMounted()) {
                this.setState({
                    book: result.books[this.props.params.bookId]
                });
            }
        }.bind(this));



    },

    render: function() {
        return (
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <span className="bookItem__title bookItem__title--title">Title: </span>
                    <span className="bookItem__title bookItem__title--text"> {this.state.book.name}</span>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <span className="bookItem__description bookItem__description--title">Description: </span>
                    <span className="bookItem__description bookItem__description--text"> {this.state.book.description}</span>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <span className="bookItem__authors bookItem__authors--title">Authors: </span>
                    <span className="bookItem__authors bookItem__authors--text">
                        {this.state.book.autors.map(function (author) {
                            return <span><a href={'#/authors/' + author}>{this.state.authors[author].name
                                }</a> | </span>;
                        }.bind(this))}
                    </span>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <span className="bookItem__genres bookItem__genres--title">Genres: </span>
                    <span className="bookItem__genres bookItem__genres--text">
                        {this.state.book.genre.map(function (genre) {
                            return <span><a href={'#/genres/' + genre}>{this.state.genres[genre].name}</a> | </span>;
                        }.bind(this))}
                    </span>
                </div>
            </div>
        );
    }
});

module.exports = BookItem;
