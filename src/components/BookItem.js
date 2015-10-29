/**
 * Created by andrew on 29.10.15.
 */

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.css');

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
            <div className="lala">
                Title: {this.state.book.name} <br/>
                Description: {this.state.book.description} <br/>
                Authors: {this.state.book.autors.map(function (author) {
                return <div><a href={'#/authors/' + author}>{this.state.authors[author].name
                    }</a></div>;
            }.bind(this))}
                Genres: {this.state.book.genre.map(function (genre) {
                return <div><a href={'#/genres/' + genre}>{this.state.genres[genre].name}</a></div>;
            }.bind(this))}
            </div>
        );
    }
});

module.exports = BookItem;
