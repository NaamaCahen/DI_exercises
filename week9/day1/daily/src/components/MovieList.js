import React from "react";
import { connect } from "react-redux";
import { viewDetails } from "../actions";

const MovieList = (props) => {
    return (
        <>
            <h1>Movie List</h1>
            {
                props.list.map((item, i) => {
                    return (<div key={i}> {item.title}
                        <button onClick={() => props.details(item)}>details</button>
                    </div>)

                })
            }


        </>
    )
}
const mapStateToProps = (state) => {
    return {
        list: state.moviesList
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        details: (movie) => dispatch(viewDetails(movie))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList)