
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Restaurant from './restaurant';

const Restaurants=[

    
    {name:'Albek', menu:["chicken 65","grill","lolipop"]},
    {name:'Udupi',menu:["masala dosa", "idli","vada"] },
    {name:'Park and Eat',menu:["chicken biryani","chicken kebab"]},
    {name:'KFC', menu:["bucket","wings","burger"] },
    {name:'Meat and Eat',menu:["chicken nuggets", "grill"]}

];


ReactDOM.render(<Restaurant items={Restaurants} />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
