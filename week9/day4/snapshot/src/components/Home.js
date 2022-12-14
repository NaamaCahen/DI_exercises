import React, { useEffect } from 'react'
import Gallery from './Gallery'
import Search from './Search'
import { useState, createContext } from 'react'
import Buttons from './Buttons'

export const HomeContext = createContext(null)

const Home = (props) => {
    const [category, setCategory] = useState(props.title)

    useEffect(() => {
        console.log(category);
    }, [category])

    return (
        <>
            <HomeContext.Provider value={{ category, setCategory }}>
                <h1 className='tc blue'>SnapShot</h1>
                <Search />
                <Buttons />
                <h2 className='tc blue'>{props.title} Pictures</h2>
                <Gallery category={category} />
            </HomeContext.Provider>
        </>


    )
}

export default Home