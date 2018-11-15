import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MovieListCard from './MovieListCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Alertjs from './Alertjs'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div>
<NavBar />
<MovieListCard />
<Alertjs />
</div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
