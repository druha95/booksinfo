/**
 * Created by andrew on 29.10.15.
 */




var React = require('react/addons');
var $ = require('jquery');
var BookAuthor = require('./BookAuthor');



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
            <div className="col-md-12 col-xs-12 col-sm-12">
                <div className="col-md-5 col-sm-6 col-xs-6 booklist_title">Book</div>
                <div className="col-md-5 col-sm-6 col-xs-6 booklist_title">Authors</div>
            {this.state.books.map(function(item) {
                return <div className="col-md-12 col-xs-12 col-sm-12"><BookAuthor book={item.name} bookId={item.id} author={item.autors} authors={this.state.authors}/></div>;
            }.bind(this))}
            </div>
        );
    }
});

module.exports = BookList;
