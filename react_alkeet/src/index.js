
import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.courseName}</h1>
        </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa onePart={props.partsToUseAway[0]} />
            <Osa onePart={props.partsToUseAway[1]} />
            <Osa onePart={props.partsToUseAway[2]} />
            <p></p>
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.onePart.name} {props.onePart.exercises}</p>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.sum} tehtävää</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10
            },
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            },
            {
                name: 'Komponenttien tila',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Otsikko courseName={course.name} />
            <Sisalto partsToUseAway={course.parts} />
            <Yhteensa sum={course.parts.reduce(
                (total, entity) => total + entity.exercises
                , 0)} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))