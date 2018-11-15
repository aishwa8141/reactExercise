import React from 'react';
// import './List.css';

const styles={
    checklist: {
       
       color: 'grey',
       display: 'block',
       position: 'relative',
        padding: '35px',
       fontSize: '22px'
    }
}

export default function List(props){
    return(
    //     <ul style={styles.list}>
    //     {
    //         props.items.map(
    //             items =>(items.display) ?
    //              <li>{items.name}</li>:
    //             null
    //         )
    //     }
    
    // </ul>
    props.items.map(
     item =>
     <div style={styles.checklist}>
         <input type="checkbox" name={item.name }/>
         <label>{item.label}</label>
         
     </div>
    )
    );
}