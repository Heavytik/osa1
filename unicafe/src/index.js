import React from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
    const {hyvaPainalluksia} = props
    
    return (       
        <div>
            <h1>anna palautetta</h1>
            <button type = "button" /*onClick={lisaaHyvia()}*/>hyvä</button>
            <button type = "button">neutraali</button>
            <button type = "button">huono</button>
            <h1>statistiikka</h1>
            <p>hyvä {hyvaPainalluksia.value}</p>
            <p>neutraali</p>
            <p>huono</p>
        </div>
    )
}

const hyvaPainalluksia = {
    value: 0
}

const lisaaHyvia = () => {
    hyvaPainalluksia.value++
    renderoi()
}


const renderoi = () => {
    ReactDOM.render(
        <App hyvaPainalluksia={hyvaPainalluksia} />,
        document.getElementById('root')
    )
}

renderoi()
lisaaHyvia()
lisaaHyvia()
