import React, { useContext } from "react"
import './header.css'
import { Route, Routes, Link } from "react-router-dom"

import logo from '../images/video-vertical.png'
import moon from '../images/moon.svg'
import history from '../images/book-white.svg'
import search from '../images/search-normal-white.svg'
import favorites from '../images/heart-white.svg'
import { ThemeContext } from "../Providers/ThemeProvider"

export default function Header() {
    const [theme, setTheme] = useContext(ThemeContext)
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <header>
                        <nav className="container">
                            <div className="main-btns">
                                <Link to='/' className="logo-img">
                                    <img src={logo} />
                                </Link>
                                <Link onClick={changeTheme} className="change-theme">
                                    <img src={moon} />
                                </Link>
                            </div>

                            <div className="navigation-menu">
                                <div className="search">
                                    <Link to='/history' className="history">
                                        <img src={history} />
                                    </Link>
                                    <input type="search" placeholder="Поиск" />
                                    <Link to='/search' className="search-btn">
                                        <img src={search} />
                                    </Link>
                                </div>
                                <Link to='/favorites' className="favorites">
                                    <img src={favorites} />
                                </Link>
                                <div className="profile-menu">
                                    <Link to='/signup' className="registration-btn">Регистрация</Link>
                                    <Link to='/signin' className="registration-btn">Вход</Link>
                                </div> 
                            </div>
                        </nav>
                    </header>
                }
            />
            <Route
                path="/history"
                element={
                    <header>
                        <nav className="container">
                            <div className="main-btns">
                                <Link to='/' className="logo-img">
                                    <img src={logo} />
                                </Link>
                                <Link onClick={changeTheme}  className="change-theme">
                                    <img src={moon} />
                                </Link>
                            </div>

                            <div className="navigation-menu">
                                <div className="search">
                                    <Link to='/history' className="history">
                                        <img src={history} />
                                    </Link>
                                    <input type="search" placeholder="Поиск" />
                                    <Link to='/search' className="search-btn">
                                        <img src={search} />
                                    </Link>
                                </div>
                                <Link to='/favorites' className="favorites">
                                    <img src={favorites} />
                                </Link>
                                <div className="profile-menu">
                                    <Link to='/signup' className="registration-btn">Регистрация</Link>
                                    <Link to='/signin' className="registration-btn">Вход</Link>
                                </div> 
                            </div>
                        </nav>
                    </header>
                }
            />
            <Route
                path="/search"
                element={
                    <header>
                        <nav className="container">
                            <div className="main-btns">
                                <Link to='/' className="logo-img">
                                    <img src={logo} />
                                </Link>
                                <Link onClick={changeTheme}  className="change-theme">
                                    <img src={moon} />
                                </Link>
                            </div>

                            <div className="navigation-menu">
                                <div className="search">
                                    <Link to='/history' className="history">
                                        <img src={history} />
                                    </Link>
                                    <input type="search" placeholder="Поиск" />
                                    <Link to='/search' className="search-btn">
                                        <img src={search} />
                                    </Link>
                                </div>
                                <Link to='/favorites' className="favorites">
                                    <img src={favorites} />
                                </Link>
                                <div className="profile-menu">
                                    <Link to='/signup' className="registration-btn">Регистрация</Link>
                                    <Link to='/signin' className="registration-btn">Вход</Link>
                                </div> 
                            </div>
                        </nav>
                    </header>
                }
            />
            <Route
                path="/favorites"
                element={
                    <header>
                        <nav className="container">
                            <div className="main-btns">
                                <Link to='/' className="logo-img">
                                    <img src={logo} />
                                </Link>
                                <Link onClick={changeTheme} className="change-theme">
                                    <img src={moon} />
                                </Link>
                            </div>

                            <div className="navigation-menu">
                                <div className="search">
                                    <Link to='/history' className="history">
                                        <img src={history} />
                                    </Link>
                                    <input type="search" placeholder="Поиск" />
                                    <Link to='/search' className="search-btn">
                                        <img src={search} />
                                    </Link>
                                </div>
                                <Link to='/favorites' className="favorites">
                                    <img src={favorites} />
                                </Link>
                                <div className="profile-menu">
                                    <Link to='/signup' className="registration-btn">Регистрация</Link>
                                    <Link to='/signin' className="registration-btn">Вход</Link>
                                </div> 
                            </div>
                        </nav>
                    </header>
                }
            />
            <Route
                path="/signup"
                element={
                    <header>
                        <nav className="container">
                            <div className="main-btns">
                                <Link to='/' className="logo-img">
                                    <img src={logo} />
                                </Link>
                                <Link onClick={changeTheme}  className="change-theme">
                                    <img src={moon} />
                                </Link>
                            </div>

                            <div className="navigation-menu">
                                <div className="search">
                                    <Link to='/history' className="history">
                                        <img src={history} />
                                    </Link>
                                    <input type="search" placeholder="Поиск" />
                                    <Link to='/search' className="search-btn">
                                        <img src={search} />
                                    </Link>
                                </div>
                                <Link to='/favorites' className="favorites">
                                    <img src={favorites} />
                                </Link>
                                <div className="profile-menu">
                                    <Link to='/signup' className="registration-btn">Регистрация</Link>
                                    <Link to='/signin' className="registration-btn">Вход</Link>
                                </div>  
                            </div>
                        </nav>
                    </header>
                }
            />
            <Route
                path="/signin"
                element={
                    <header>
                        <nav className="container">
                            <div className="main-btns">
                                <Link to='/' className="logo-img">
                                    <img src={logo} />
                                </Link>
                                <Link onClick={changeTheme} className="change-theme">
                                    <img src={moon} />
                                </Link>
                            </div>

                            <div className="navigation-menu">
                                <div className="search">
                                    <Link to='/history' className="history">
                                        <img src={history} />
                                    </Link>
                                    <input type="search" placeholder="Поиск" />
                                    <Link to='/search' className="search-btn">
                                        <img src={search} />
                                    </Link>
                                </div>
                                <Link to='/favorites' className="favorites">
                                    <img src={favorites} />
                                </Link>
                                <div className="profile-menu">
                                    <Link to='/signup' className="registration-btn">Регистрация</Link>
                                    <Link to='/signin' className="registration-btn">Вход</Link>
                                </div> 
                            </div>
                        </nav>
                    </header>
                }
            />
            <Route
                path="/about_movie/:movieId"
                element={
                    <header>
                        <nav className="container">
                            <div className="main-btns">
                                <Link to='/' className="logo-img">
                                    <img src={logo} />
                                </Link>
                                <Link onClick={changeTheme}  className="change-theme">
                                    <img src={moon} />
                                </Link>
                            </div>

                            <div className="navigation-menu">
                                <div className="search">
                                    <Link to='/history' className="history">
                                        <img src={history} />
                                    </Link>
                                    <input type="search" placeholder="Поиск" />
                                    <Link to='/search' className="search-btn">
                                        <img src={search} />
                                    </Link>
                                </div>
                                <Link to='/favorites' className="favorites">
                                    <img src={favorites} />
                                </Link>
                                <div className="profile-menu">
                                    <Link to='/signup' className="registration-btn">Регистрация</Link>
                                    <Link to='/signin' className="registration-btn">Вход</Link>
                                </div> 
                            </div>
                        </nav>
                    </header>
                }
            />
        </Routes>
    )
}
