import React from 'react';
import {useState,useContext} from 'react';
import {HomeContext} from './Home'
import './Gallery.css'


function Search(props) {
    const {category,setCategory}=useContext(HomeContext);
    const [displaySearch,setDisplaySearch]=useState(false);

    const handleSearch=(e)=>{
        e.preventDefault();
        setCategory(e.target.search.value);
        e.target.search.value='';
    }

    const handleSearchButton=(e)=>{       
            setDisplaySearch(!!e.target.value); 
    }

    return (
        <>
        <form className='flex center h2' onSubmit={handleSearch}>
            <input id='search' placeholder='search ' onChange={handleSearchButton}/>
            <button id='btn' type='submit' style={{display:displaySearch?'block':'none'}} className="bg-blue bn white">search</button>
        </form>
            
        </>
    )
}

export default Search