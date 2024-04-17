import React from "react"
import './about.css'

import { useSelector } from "react-redux"

export default function FilmInformation() {
    const { movie } = useSelector(state => state)
    const movieCard = {
        description: movie[0].description,
        id: movie[0].id,
        name: movie[0].name,
        poster: movie[0].poster.previewUrl, 
        rating: movie[0].rating.kp
    }

    return (
        <>
            <div className="movie-card">
                <div className="about-movie">
                    <img src={movieCard.poster} />
                </div>
                <div className="movie-info">
                    <h1>{movieCard.name}</h1>
                    <h3>Рейтинг: {movieCard.rating}</h3>
                    <h3>Описание</h3>
                    <p>{movieCard.description}</p>
                </div>
                
            </div>
        </>
    )
    
}
