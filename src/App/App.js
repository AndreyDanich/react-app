import React from "react"
import { Route, Routes } from "react-router-dom"
import './App.css'

import Header from "../Header/Header"
import Main from "../Main/Main"
import History from "../History/History"
import Search from "../Search/Search"
import Registration from "../Registration/Registration"
import Login from "../Login/Login"
import Favorites from "../Favorites/Favorites"
import FilmInformation from "../FilmInformation/FilmInformation"


export default function App() {
    return (
        <>
            <Header />
            <main>
                <div className='main container'>
                    {/* <div className='navigation'>Топ фильмов Кинопоиска</div> */}
                    <div className='content'>
                        <Routes>
                            <Route
                                path="/"
                                element = {<Main />}    
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
                                path="/about_movie"
                                element = {<FilmInformation />}    
                                        />
                        </Routes>
                    </div>  
                </div>
            </main>
        </>
    )
}