/**
 * Created by andrew on 29.10.15.
 */

var React = require('react/addons');

var $ = require('jquery');
var BookAuthor = require('./BookAuthor');


var GenresList = React.createClass({
    getInitialState: function() {
        return {
            books: [],
            authors: [],
            genre: {
                name: '',
                books: []
            }
        };
    },



    componentDidMount: function() {
        $.get('../books.json', function(result) {
            if (this.isMounted()) {
                this.setState({
                    books: result.books
                });
            }
        }.bind(this));

        $.get('../authors.json', function(result) {
            if (this.isMounted()) {
                this.setState({
                    authors: result.authors
                });
            }
        }.bind(this));


        this.setState({
            genreId: this.props.params.genreId
        });

        $.get('../genres.json', function(result) {
            if (this.isMounted()) {
                this.setState({
                    genre: result.genres[this.props.params.genreId]
                });
            }
        }.bind(this));

    },


    render: function() {
        return (
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <span className="genres__title genres__title--title">Genre: </span>
                    <span className="genres__title genres__title--text"> {this.state.genre.name}</span>
                </div>
                {this.state.genre.books.map(function(item) {
                    return <div><BookAuthor book={this.state.books[item].name} bookId={this.state.books[item].id} author={this.state.books[item].autors} authors={this.state.authors}/></div>;
                }.bind(this))}
            </div>
        );
    }
});

module.exports = GenresList;
