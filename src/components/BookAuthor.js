/**
 * Created by andrew on 29.10.15.
 */
'use strict';

var React = require('react/addons');



var AuthorLink = React.createClass({
    render: function() {
        return (
            <span className="lala">
                <a href={'#/authors/' + this.props.id}>{this.props.author.name} |</a>
            </span>
        );
    }
});


var BookAuthor = React.createClass({
    render: function() {
        return (
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="col-md-6 col-sm-6 col-xs-6">
                    <a className="col-md-12 col-sm-12 col-xs-12" href={'#/books/' + this.props.bookId}>{this.props.book}</a>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                    {this.props.author.map(function(item) {
                        return <AuthorLink author={this.props.authors[item]} id={item}/>;
                    }.bind(this))}
                </div>
            </div>
        );
    }
});

module.exports = BookAuthor;
