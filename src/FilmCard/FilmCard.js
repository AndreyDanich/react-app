import React from "react"
import './filmCard.css'
import { useEffect } from "react";
import { useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
// import { Route, Routes } from "react-router-dom"
// import { FilmInformation } from "../FilmInformation/FilmInformation";

export default function FilmCard() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'X-API-KEY': 'N7FBPDG-8XG4TRX-JVCVPP5-HZ87GDW'}
        };
        fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=250&selectFields=name&selectFields=id&selectFields=description&selectFields=releaseYears&selectFields=rating&selectFields=poster&selectFields=logo', options)
        .then(response => response.json())
        .then(data => {
            let result = data.docs
            console.log(result) 
            return result
        })
        .then((data) => {
                setIsLoaded(true);
                setItems(data);
        })
        .catch(err => console.error(err))
    }, [])    
    
    
    if (!isLoaded) {
        return <div>Загрузка...</div>
    } else {
        return (
            <>
                {items.map(item => {
                    return (
                        <>
                            <Routes>
                                <Route path="/"
                                    element={
                                        <Link to={{
                                        
                                            pathname: '/about_movie',
                                            state: {
                                                id: item.id,
                                                name: item.name,
                                                description: item.description,
                                                poster: item.poster.previewUrl,
                                                rating: item.rating.kp
                                            }
                                        }} className="film-card" key={item.id}>
                                            <img src={item.poster.previewUrl} />
                                        </Link>
                                    } 
                                />
                            </Routes>
                        </>
                    )
                })}
            </>
        )
    }
}

// function handleClick() {
//     return (
//         <Routes>
//             <Route path="/about"
//                 Component={ <FilmInformation/>} />
//         </Routes>
//     )
// }