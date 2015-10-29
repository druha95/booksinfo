/**
 * Created by andrew on 27.10.15.
 */

'use strict';

var React = require('react/addons');
var $ = require('jquery');

var Authors = React.createClass({

    getInitialState: function() {
        return {
            books: [],
            authors: [],
            choosen: {},
            showIndex: ''
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
    },

    select: function(item) {
        this.setState({
            choosen: item
        });

    },

    getList: function(item, choosen) {
        if(item.name === choosen.name) {
            return <div className="dropdown">
                <div className="dropdown__name">{item.name}</div>
                <div className="dropdown__books"> {item.books.map(function(book) {
                    return <div className="dropdown__books__book">{this.state.books[book].name}</div>;
                    }.bind(this))}
                </div>
            </div>;
        }
    },

    render: function() {
        return (
            <div className="col-md-12 col-sm-12 xol-xs-12">
                {this.state.authors.map(function(item) {
                    return <div className="dropdown_button" onClick={this.select.bind(null, item)}>{item.name}
                        <div className="dropdown_wrapper">{this.getList(item, this.state.choosen)}</div>
                    </div>
                        ;
                }.bind(this))}

            </div>

        );
    }
});

module.exports = Authors;

