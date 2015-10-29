'use strict';

//var CybervisionApp = require('./CybervisionApp');
var BookList = require('./BookList');
var BookItem = require('./BookItem');
var Authors = require('./Authors');
var AuthorItem = require('./AuthorItem');
var GenresList = require('./GenresList');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

// CSS
require('normalize.css');
require('../styles/main.less');
require('../styles/bootstrap.css');

var Routes = (
    <Route path="/" name="root">
        <Route path="/books" name="books" handler={BookList}/>
        <Route path="/books/:bookId" name="book" handler={BookItem}/>
        <Route path="/authors" name="authors" handler={Authors}/>
        <Route path="/authors/:authorId" name="author" handler={AuthorItem}/>
        <Route path="/genres/:genreId" name="genres" handler={GenresList}/>
    </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
