/**
 * Created by andrew on 27.10.15.
 */

'use strict';

var React = require('react/addons');
var $ = require('jquery');

// CSS
require('normalize.css');
require('../styles/main.css');


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
            return <div>{item.name} {item.books.map(function(book) {
               return <div>{this.state.books[book].name}</div>;
            }.bind(this))}</div>;
        }
    },

    render: function() {
        return (
            <div className="lala">
                {this.state.authors.map(function(item) {
                    return <div onClick={this.select.bind(null, item)}>{item.name}<div>{this.getList(item, this.state.choosen)}</div></div>
                        ;
                }.bind(this))}

            </div>

        );
    }
});

module.exports = Authors;

