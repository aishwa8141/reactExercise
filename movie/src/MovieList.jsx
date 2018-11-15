import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Button } from 'reactstrap';


const styles={
  movieStyle: {
    
     textAlign:'center',
     position: 'relative',
     fontSize: '22px',
     border: '10px',
     width: '100px'
     
  },
  h2: {
     display: 'center'
  },
  row: {
    padding: '15px',
  
  },
  container: {
    backgroundColor: 'grey'
  }
}
export default function MovieList(props){
  
    return(

      
            <Container style={styles.container} >
       <h2 className="center">Movie</h2>
            <Row>
              
              {
                props.moviesList.map( movie=>
                  <div>
                  <Col style={styles.movieStyle} lg={6}>{movie.movieName}</Col>
                  <Row style={styles.row} > <Button color="primary">add to favourites</Button></Row>
                  </div>
                  )
              }
              
            </Row>
      </Container>
     
);
}


