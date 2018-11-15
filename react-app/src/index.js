import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
// import CheckList from './CheckList';
// import './List.css';
// const cartoons =
// [
//     { name: 'mouse', creater: 'walt' , display:'false'},
//         {name:'tom', creater: 'hannah', display:'true'}
        

    
// ];

const checkboxes = [
    {
      name: 'tom',
      key: 'checkBox1',
      label: 'jerry',
    },
    {
      name: 'dora',
      key: 'checkBox2',
      label: 'dora',
    },
    {
      name: 'mr bean',
      key: 'checkBox3',
      label: 'mr bean',
    },
    {
      name: 'pink patter',
      key: 'checkBox4',
      label: 'pink patter',
    },
  ];
  
  export default checkboxes;

ReactDOM.render(<List items={checkboxes} />,
    document.getElementById('root'));

// ReactDOM.render(<CheckList/>,document.getElementById('root'));