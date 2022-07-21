import React from "react"
import {useState} from "react"

const Display = props => <div>{props.text}: {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return(
    <>
      <Display value={props.good} text="good"/>
      <Display value={props.neutral} text="neutral" />
      <Display value={props.bad} text="bad"/>
      <Display value={props.all} text="all"/>
      <Display value={props.avg} text="average"/>
      <Display value={props.positive} text="positve"/>
    </>  
  )
}

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const setToAll = newAll => {
    setAll(newAll)
  }

  const setToGood = newGood => {
    setGood(newGood)
    setToAll(all + 1)
  }
  
  const setToNeutral = newNeutral => {
    setNeutral(newNeutral)
    setToAll(all + 1)
  }

  const setToBad= newBad => {
    setBad(newBad)
    setToAll(all + 1)
  }

  const avg = (good - bad) / all
  const positive = (good/all) * 100

  return (
    <>
    <h1>give feedback</h1>
    <div>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
    </div>
    <h2>Statistics</h2>
    <div>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} avg={avg} positive={positive} />
    </div>
    </>
  )
}