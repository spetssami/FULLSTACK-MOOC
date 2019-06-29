import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = ({reviews}) => {
  const {good, bad, neutral} = reviews;
  return (
    <div>
      <p>avg {(good*1-bad*1)/(good+bad+neutral)}</p>
      <p>positive {good/(bad+neutral)}%</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const reviews = {
    good: good,
    neutral: neutral,
    bad: bad
  }
  
  
  if(good !=0 || neutral != 0 || bad != 0 ){
    return (
      <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good +1)}>Good</button>
      <button onClick={() => setNeutral(neutral +1)}>Neutral</button>
      <button onClick={() => setBad(bad +1)}>Bad</button>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+bad+neutral}</p>
      <Statistics reviews = {reviews}/>
      </div>
    )
  } else { 
    return (
      <div>
        <h1>Give feedback</h1>
        <button onClick={() => setGood(good +1)}>Good</button>
        <button onClick={() => setNeutral(neutral +1)}>Neutral</button>
        <button onClick={() => setBad(bad +1)}>Bad</button>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)