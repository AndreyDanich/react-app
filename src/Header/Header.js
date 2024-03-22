import React from "react";
import './header.css'

export default function Header() {
    return (
        <header>
            <nav className="container">
                <div>
                    <a href="#">
                        <img className="logo-img" src="../images/video-square.svg"/>
                    </a>
                    <button>Тема</button>
                </div>

                <div className="navigation-menu">
                    <div className="search">
                        <button>История</button>
                        <input/>
                        <button>Поиск</button>
                    </div>
                    <button>Избранное</button>
                    <div className="profile-menu">
                        <button>Регистрация</button>
                        <button>Вход</button>
                    </div> 
                </div>
            </nav>
        </header>
    )
}