import React from 'react';



const styles={
    list:{
        listStyle:'none',
        fontSize:'25px',
        fontFamily:' -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        margin:'auto',
        width:'50vw'
        
    },
    names:{
        color:'rgb(49,0,0)',
        border:'1px solid rgb(49,0,0)',
        borderRadius:'20px 20px 20px 0',
        boxShadow:'10px 10px 10px grey ',
        padding:'20px',
        margin:'10px',
        backgroundColor:'salmon'
    },
    menu:{
        color:'darkbrown',
        width:'100%'
        },
    res:{
        // border:'1px solid red',
        // borderStyle:'dotted',
        // borderRadius:'5px',
        fontSize:'2em',
        fontWeight:'bolder',
        backgroundColor:'salmon',
        textAlign:'center',
    },
    men:{
        textAlign:'center',
        fontSize:'1em',
        color:'wheat',
        fontFamily:'sans-serif',
        textShadow:'2px 2px black'
    }
    

}

export default function List(props){

    return (
    <div>
         
        <ul style={styles.list}>
            {
                props.items.map(
                    item=> <li style={styles.names}><div style={styles.res}>{item.name}</div><p style={styles.men}>Menu</p>
                     <ul>
                         {  
                            item.menu.map(
                                menu=><li style={styles.menu}>{menu}</li>
                            )
                         }
                         </ul>   
                    </li>
                    
                )
               
            }
        </ul>
        </div>
    );
};