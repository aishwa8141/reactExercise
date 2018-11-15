import React, { Fragment } from 'react';
import { Card, Button, CardTitle, Row, Col } from 'reactstrap';
import movie from './movie.json';
import axios from 'axios';


export default class MovieListCard extends React.Component{

  state={
    movies:[],
    newMovie: "ranna",
     
    newRealeaseDate: "2003-07-09",

  }
  componentDidMount(){
    axios.get('http://localhost:3001/movies')
    .then(response=>{
      this.setState({
        movies:response.data
      });

    }
    );
  }
  handleDeleteMovie(movie) {
    // e.preventDefault();
    console.log('movie to Delete:', movie);
    // TODO: 1. Delete movie from state
    const oldmoviesList = this.state.movies;
    console.log("old movielist:",oldmoviesList);
    const newMoviesList = oldmoviesList.filter(c => c !== movie);
    this.setState({
        movies: newMoviesList
    });

    // TODO: 2. Delete cartoon from server
    axios.delete(`http://localhost:3001/movies/${movie.id}`)
        .then(res => {
            console.log('Deleted movie from server');
        }).catch(err => {
            console.error('There was a problem deleting the movie. ERR:', err);
        });
}

createNewMovie(event){
  event.preventDefault();
  const newmovie = {
    title: this.state.newMovie,
    releasedate: this.state.newRealeaseDate
  };
  axios.post('http://localhost:3001/movies',newmovie)
  .then(response=> {
       const movieList= this.state.movies;
       const newMovieList=[...movieList, response.data];
         this.setState({
           movies:newMovieList,
           newMovie: "",
           newRealeaseDate: ""
         });
         
       }).catch(err => {

       });
     }
  
  
handleNewMovieNameChanged(event){
 this.setState({
   newMovie: event.target.value
 })
}
handleNewReleaseChanged(event){
 this.setState({
   newRealeaseDate: event.target.value
 })
}


    render(){
        return(
          <Fragment>

          <form onSubmit={this.createNewMovie.bind(this)}>
                    <input type="text" onChange={this.handleNewMovieNameChanged.bind(this)} value={this.state.newMovie} placeholder="Movie Name" />
                    <input type="text" onChange={this.handleNewReleaseChanged.bind(this)} value={this.state.newRealeaseDate} placeholder="Date" />
                    <input type="submit" value="Create" />
</form>
        <Row>
          {
            movie.movies.map((movieDetail,i) =>
        <Col key={i} sm="4">
        <Card body>
          <CardTitle>Movie detail</CardTitle>
          <div>
          
          <h6>{movieDetail.title}</h6>
          <h6>{movieDetail.releasedate}</h6>
          
          </div>
          <Button onClick={()=>this.handleDeleteMovie(movieDetail)}>delete</Button>
          <hr/>
        </Card>
      </Col>
            )
          }
    </Row>
    </Fragment>
        
        );
    
}
}

//  class Create extends React.Component{

  
//   render(){
//     return(
      
//     )
//   }
// }