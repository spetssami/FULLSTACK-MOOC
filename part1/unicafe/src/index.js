import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = ({reviews}) => {
  const {good, bad, neutral} = reviews;
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <td>all</td>
          <td>{good+bad+neutral}</td>
        </tr>
        <tr>
          <td>avg</td>
          <td>{Math.round((good*1-bad*1)/(good+bad+neutral)*10)/10}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{Math.round(good/(good+bad+neutral)*1000)/10}%</td>
        </tr>
        </tbody>
      </table>
      
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick = {props.onClick}> {props.text} </button>
  )
}

const Static = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const reviews = {good, neutral, bad}
  
  
  
  if(good !=0 || neutral != 0 || bad != 0 ){
    return (
      <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good+1)} text="good" />
      <Button onClick={() => setNeutral(neutral +1)} text="neutral"/>
      <Button onClick={() => setBad(bad +1)} text="bad" />
      <h1>Statistics</h1>
      <Static text="good" value = {good} /> 
      <Static text="neutral" value = {neutral}/>
      <Static text="bad" value = {bad} />
      <Statistics reviews = {reviews}/>
      </div>
    )
  } else { 
    return (
      <div>
        <h1>Give feedback</h1>
        <Button onClick={() => setGood(good+1)} text="good" />
        <Button onClick={() => setNeutral(neutral +1)} text="neutral"/>
        <Button onClick={() => setBad(bad +1)} text="bad" />
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)