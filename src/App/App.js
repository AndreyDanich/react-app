import React from "react"
import { Route, Routes } from "react-router-dom"
import './App.css'

import Header from "../Header/Header"
import History from "../History/History"
import Search from "../Search/Search"
import Registration from "../Registration/Registration"
import Login from "../Login/Login"
import Favorites from "../Favorites/Favorites"
import AboutMovie from "../AboutMovie/AboutMovie"
import FilmCard from "../FilmCard/FilmCard"
import { ThemeProvider } from "../Providers/ThemeProvider"

export default function App() {
    return (
        <>
            <ThemeProvider>
            <Header />
            <main>
                <div className='main container'>
                    {/* <div className='navigation'>Топ фильмов Кинопоиска</div> */}
                    <div className='content'>
                        <Routes>
                            <Route
                                path="*"
                                element = {<FilmCard />}    
                            /> 
                            <Route
                                path="/history"
                                element = {<History />}    
                            />
                            <Route
                                path="/search"
                                element = {<Search />}    
                            />
                            <Route
                                path="/favorites"
                                element = {<Favorites />}    
                            />
                            <Route
                                path="/signup"
                                element = {<Registration />}    
                            />
                            <Route
                                path="/signin"
                                element = {<Login />}    
                            />
                            <Route
                                path="/about_movie/:movieId"
                                element = {<AboutMovie />}    
                            />
                        </Routes>
                    </div>  
                </div>
                </main>
            </ThemeProvider>
        </>
    )
}