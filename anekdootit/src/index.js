import React from 'react'
import ReactDOM from 'react-dom'

const Anecdote = (props) => {
    const ancStyle = {
        height: '60px',
        borderStyle: 'solid',
        padding: '5px',
        margin: '5px',
        minWidth: '630px'
    }
    console.log(props)
    return(
        <div style={ancStyle}>
            <div>
                {anecdotes[props.showAnecdote]}
            </div>
            <div>
                Has {props.points[props.showAnecdote]} votes
            </div>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            points: {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0
            },
            mostVoted: 0
        }
    }

    render() {
        // Adds one point more to current anecdote
        const addPoint = () => {    
            const selected = this.state.selected
            const newPoints = {...this.state.points}
            newPoints[selected] += 1

            this.setState({points: newPoints})
        }

        // Change random anecdote number to state.selected
        const newAnecdote = () => {
            const randomNum = Math.floor(Math.random() * 6)            
            this.setState({selected: randomNum})
        }

        const mostVoted = () => {

            const reduceFunction = (current, item, index) => {
                console.log('item', item, 'current', current, 'index', index)
                const x = this.state.points[current]
                if (item > x) {
                    return index
                } else {
                    return current
                }
            }
            console.log(Object.values(this.state.points))
            const newMostVoted = Object.values(this.state.points)
                                    .reduce(reduceFunction, 0)

            return newMostVoted
        }
        
        return (
            <div>
                <Anecdote showAnecdote={this.state.selected}
                    points={this.state.points}/>
                <div>
                    <button onClick={addPoint}>
                        Vote
                    </button>
                    <button onClick={newAnecdote}>
                        New anecdote
                    </button>
                </div>
                <div>
                    <p>Most voted:</p>
                    <Anecdote showAnecdote={mostVoted()}
                        points={this.state.points}/>
                </div>
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)