import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"



function App() {
const [theme, setTheme] = useState (false)

const toggleDarkMode = (isDark: boolean) => {
        setTheme(isDark)
}
    return (
        <div className='container'>
            <Navbar darkMode = {theme} toggleDarkMode = {toggleDarkMode}/>
            <Main darkMode = {theme} />
        </div>
  );
}

export default App;


// Пн - Нативка Карина Кришнева, Илья Матюшин
// Вт - ВЫХОДНОЙ
// Ср - ВЫХОДНОЙ
// Чт - СоцСеть Юля Слатвицкая, Костя Сильченко
// Пт - Тудулист Илья Шулапов, Денис Полуносик
// Сб – 11:00 Верстка
// Вс - Тудулист Саня Юдинцев, Рома Шинкаренко (гости Вася, Артем, Володя)

