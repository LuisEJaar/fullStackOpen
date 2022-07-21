import React from "react"
import {useState} from "react"

const Display = props => <div>{props.text}: {props.value}</div>
const DisplayPct = props => <div>{props.text}: {props.value}%</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return(
    <>
      <Display value={props.clicks.good} text="good"/>
      <Display value={props.clicks.neutral} text="neutral" />
      <Display value={props.clicks.bad} text="bad"/>
      <Display value={props.all} text="all"/>
      <Display value={props.avg} text="average"/>
      <DisplayPct value={props.positive} text="positve"/>
    </>  
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

  const all = clicks.good + clicks.neutral + clicks.bad
  const avg = (clicks.good - clicks.bad) / all
  const positive = (clicks.good/all) * 100
  

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
      <Statistics clicks={clicks} all={all} avg={avg} positive={positive} />
    </div>
    </>
  )
}