/**
 * Created by andrew on 29.10.15.
 */
'use strict';

var React = require('react/addons');
var $ = require('jquery');

// CSS
require('normalize.css');
require('../styles/main.css');


var AuthorItem = React.createClass({

    getInitialState: function() {
        return {
            books: [],
            author: {
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

        this.setState({
            authorId: this.props.params.authorId
        });

        $.get('../authors.json', function(result) {
            if (this.isMounted()) {
                this.setState({
                    author: result.authors[this.props.params.authorId]
                });
            }
        }.bind(this));

    },

    render: function() {
        return (
            <div className="lala">
                Name: {this.state.author.name} <br/>
                Biography: {this.state.author.biography} <br/>
                Books: {this.state.author.books.map(function (book) {
                return <div><a href={'#/books/' + this.state.books[book].id}>{this.state.books[book].name}</a></div>;
            }.bind(this))}
            </div>
        );
    }
});

module.exports = AuthorItem;
