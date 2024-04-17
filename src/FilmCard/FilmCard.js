import React from "react"
import './filmCard.css'
import { useEffect } from "react";
import { useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../store/slices/cardSlice";
import favorites from '../images/heart-white.svg'
// import NonFavorites from '../images/heart-slash-white.svg'

export default function FilmCard() {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch()
    
        useEffect(() => {
            const options = {
                method: 'GET',
                headers: { accept: 'application/json', 'X-API-KEY': 'N7FBPDG-8XG4TRX-JVCVPP5-HZ87GDW' }
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
                                        <div className="film-card" key={item.id}>
                                            <div className="card-favorite">
                                            <button onClick={handleClick} >
                                                <img src={favorites} />
                                            </button>
                                            </div>
                                            
                                            <Link to={`/about_movie/${item.id}`}
                                                onClick={() => dispatch(actions.getIdMovie(item))}
                                                 key={item.id}>
                                                <img src={item.poster.previewUrl} />
                                            </Link>
                                        </div>
                                        
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


function handleClick() {
    console.log('favorite')
}