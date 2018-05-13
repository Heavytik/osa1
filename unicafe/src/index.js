import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Static = ({text, value}) => (    
        <tr><td>{text}</td><td>{value}</td></tr>
)

const Statics = (props) => {
    const {hyva, neutraali, huono} = props.currentState

    const painalluksiaYhteensa = hyva + neutraali + huono
    
    function precisionRound(number, precision) {
        let factor = Math.pow(10, precision)
        return Math.round(number * factor) / factor
    }  
    
    const keskiarvo = precisionRound((hyva - huono) /
        Math.max(painalluksiaYhteensa, 1), 2)
    const hyviaProsentteina = precisionRound((hyva /
        painalluksiaYhteensa) * 100, 2) + '%'
    
    if (painalluksiaYhteensa === 0) {
        return (
            <div>
                <h1>statistiikka</h1>
                <p>ei yhtään palautetta annettu</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>statistiikka</h1>
                <table>
                    <tbody>
                        <Static text={'hyva'} value={hyva} />
                        <Static text={'neutraali'} value={neutraali} />
                        <Static text={'huono'} value={huono} />
                        <Static text={'keskiarvo'} value={keskiarvo} />
                        <Static text={'positiivisia'} 
                            value={hyviaProsentteina} />
                    </tbody>
                </table>    
            </div>
        )
    }
}
        

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    lisaa = (muutettava) => () =>
        this.setState({[muutettava]: this.state[muutettava] + 1 })
             
    
    
    render() {
        return (       
            <div>
                <h1>anna palautetta</h1>
                <Button handleClick={this.lisaa('hyva')} text={'Hyvä'} />
                <Button handleClick={this.lisaa('neutraali')}
                    text={'Neutraali'} />
                <Button handleClick={this.lisaa('huono')} text={'Huono'} />
                <Statics currentState={this.state}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
