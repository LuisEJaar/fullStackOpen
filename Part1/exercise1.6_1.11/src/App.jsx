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
  <button className="fs-3 btn btn-primary p-2 m-2" onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({clicks}) => {
  const all = clicks.good + clicks.neutral + clicks.bad
  const avg = ((clicks.good - clicks.bad) / all).toFixed(2)
  const positive = ((clicks.good/all) * 100).toFixed(2)

  if (clicks.good == 0 && clicks.neutral == 0 && clicks.bad == 0) {
    return (
      <h2>No feedback given</h2>
    )
  }
  return(
    <div className="tableBox">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Stat</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr><Statistic value={clicks.good} text="Good"/></tr>
          <tr><Statistic value={clicks.neutral} text="Neutral" /></tr>
          <tr><Statistic value={clicks.bad} text="Bad"/></tr>
          <tr><Statistic value={all} text="All"/></tr>
          <tr><Statistic value={avg} text="Average"/></tr>
          <tr><Statistic value={positive} text="Positive"/></tr>
        </tbody>
      </table> 
    </div>
     
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
    <section className="bg-info pt-5 d-flex flex-column justify-content-center align-items-center">
      <h1 className="fs-1 pb-2">Give feedback</h1>
      <div>
        <Button handleClick={() => setToGood()} text="good" />
        <Button handleClick={() => setToNeutral()} text="neutral" />
        <Button handleClick={() => setToBad()} text="bad" />
      </div>
      <h2 className="fs-2 pb-2">Statistics:</h2>
      <div>
        <Statistics clicks={clicks}/>
      </div>
    </section>
  )
}