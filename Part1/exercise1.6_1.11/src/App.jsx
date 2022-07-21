import React from "react"
import {useState} from "react"

const Statistic = props => {
  if(props.text == "positive"){
    return(
      <>
        <td>{props.text}:</td>
        <td>{props.value}%</td>
      </>
    )
  } else {
    return(
      <>
        <td>{props.text}:</td>
        <td>{props.value}</td>
      </>
    )
  }
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({clicks}) => {
  const all = clicks.good + clicks.neutral + clicks.bad
  const avg = (clicks.good - clicks.bad) / all
  const positive = ((clicks.good/all) * 100).toFixed(2)

  if (clicks.good == 0 && clicks.neutral == 0 && clicks.bad == 0) {
    return (
      <h2>No feedback given</h2>
    )
  }
  return(
    <table>
      <thead>
        <tr>
          <th scope="col">Stat</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr><Statistic value={clicks.good} text="good"/></tr>
        <tr><Statistic value={clicks.neutral} text="neutral" /></tr>
        <tr><Statistic value={clicks.bad} text="bad"/></tr>
        <tr><Statistic value={all} text="all"/></tr>
        <tr><Statistic value={avg} text="average"/></tr>
        <tr><Statistic value={positive} text="positive"/></tr>
      </tbody>
    </table>  
  )
}

export default function App() {
  const [clicks, setClicks] = useState({good: 0, neutral: 0, bad: 0})

  const setToGood = () => {
    setClicks({...clicks, good: clicks.good + 1})
  }
  
  const setToNeutral = () => {
    setClicks({...clicks, neutral: clicks.neutral + 1})
  }

  const setToBad= () => {
    setClicks({...clicks, bad: clicks.bad + 1})
  }
  
  return (
    <>
    <h1>give feedback</h1>
    <div>
      <Button handleClick={() => setToGood()} text="good" />
      <Button handleClick={() => setToNeutral()} text="neutral" />
      <Button handleClick={() => setToBad()} text="bad" />
    </div>
    <h2>Statistics</h2>
    <div>
      <Statistics clicks={clicks}/>
    </div>
    </>
  )
}