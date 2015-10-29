/**
 * Created by andrew on 29.10.15.
 */




var React = require('react/addons');
var $ = require('jquery');
var BookAuthor = require('./BookAuthor');


// CSS
require('normalize.css');
require('../styles/main.css');


var BookList = React.createClass({

    getInitialState: function() {
        return {
            books: [],
            authors: {}
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
        $.get('../books.json', function(result) {
            if (this.isMounted()) {
                this.setState({
                    books: result.books
                });
            }
        }.bind(this));

    },

    render: function() {

        return (
            <div className="lala">
            {this.state.books.map(function(item) {
                return <div><BookAuthor book={item.name} bookId={item.id} author={item.autors} authors={this.state.authors}/></div>;
            }.bind(this))}
            </div>
        );
    }
});

module.exports = BookList;
