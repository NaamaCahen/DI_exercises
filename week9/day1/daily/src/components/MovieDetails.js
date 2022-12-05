import { connect } from "react-redux";
const MovieDetails=(props)=>{
    return(
        <>
            <h1>movie details</h1>
           <h2>Title:{props.details.title}</h2>
           <h2>Release Date:{props.details.releaseDate}</h2>
           <h2>Rating:{props.details.rating}</h2>
        </>
    )
}
const mapStateToProps=(state)=>{
    return{
         details:state.movieDetail 
    }
  
}
export default connect(mapStateToProps)(MovieDetails) ;