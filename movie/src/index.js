import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as serviceWorker from './serviceWorker';

const movies=[
    {
        movieName: 'Harrypotter',
        movieId: 1

    },
    {
      movieName:  'Pirates',
      movieId: 2
    },
    {
        movieName:  'venum',
        movieId: 3
      },
      {
        movieName:  'war',
        movieId: 4
      }
]

ReactDOM.render(<MovieList moviesList={movies} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


