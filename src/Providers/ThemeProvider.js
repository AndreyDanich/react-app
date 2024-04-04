import React, { createContext, useEffect } from "react";
import { arrayOf, string } from 'prop-types'
import { useLocalStorage } from "../hooks/useLocaleStorage";
import sun from '../images/sun.svg'
import moon from '../images/moon.svg'
export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage('theme', 'light')
    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark')
            document.querySelector('.content').classList.add('dark')
            document.querySelector('.change-theme img').setAttribute('src', sun)
        } else {
            document.body.classList.remove('dark')
            document.querySelector('.content').classList.remove('dark')
            document.querySelector('.change-theme img').setAttribute('src', moon)
        }
    }, [theme])
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
     )
}
ThemeProvider.propTypes = {
    children: arrayOf(string),
};
