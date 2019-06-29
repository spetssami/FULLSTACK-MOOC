import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+bad+neutral}</p>
      <p>avg </p>
      <p>positive {good/(bad+neutral)}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)