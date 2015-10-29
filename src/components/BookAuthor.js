/**
 * Created by andrew on 29.10.15.
 */
'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.css');


var AuthorLink = React.createClass({
    render: function() {
        return (
            <div className="lala">
                <a href={'#/authors/' + this.props.id}>{this.props.author.name}</a>
            </div>
        );
    }
});


var BookAuthor = React.createClass({
    render: function() {
        return (
            <div className="lala">
                <div><a href={'#/books/' + this.props.bookId}>{this.props.book}</a></div>
                {this.props.author.map(function(item) {

                    return <AuthorLink author={this.props.authors[item]} id={item}/>;
                }.bind(this))}
            </div>
        );
    }
});

module.exports = BookAuthor;
