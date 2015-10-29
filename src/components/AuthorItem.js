/**
 * Created by andrew on 29.10.15.
 */
'use strict';

var React = require('react/addons');
var $ = require('jquery');


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
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <span className="authorItem__name authorItem__name--title">Name: </span>
                <span className="authorItem__name authorItem__bane--text"> {this.state.author.name}</span>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
                <span className="authorItem__biography authorItem__biography--title">Biography: </span>
                <span className="authorItem__biography authorItem__biography--text"> {this.state.author.biography}</span>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
                <span className="authorItem__books authorItem__books--title">Books: </span>
                <span className="authorItem__books authorItem__books--text">
                        {this.state.author.books.map(function (book) {
                            return <span><a href={'#/books/' + this.state.books[book].id}>{this.state.books[book].name}</a></span>;
                        }.bind(this))}
                </span>
            </div>
        </div>
        );
    }
});

module.exports = AuthorItem;
