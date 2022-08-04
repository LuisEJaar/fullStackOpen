import { useState } from 'react'

const RandNum = (length) => {
  return(
    Math.ceil(Math.random()*length)-1
  )
}

const Button = (props) => {
  if(props.text == "next") {
    return(
      <button className='btn btn-success m-2' onClick={props.clickHandler}>
        {props.text}
      </button>
    )
  }
  return(
    <button className='btn btn-success m-2' onClick={props.clickHandler}>
      Votes ({props.text})
    </button>
  )
}

const TopVote = ({votes, anecdotes}) => {
  const values = Object.values(votes)
  console.log(values)
  let top = values.indexOf(Math.max(...values))
  
  if(Math.max(...Object.values(votes)) == 0){
    return(
      <p>No submissions yet</p>
    )
  } else {
    return (
      <p>{anecdotes[top]}</p>
    )
  }
}

const App = () => {
  const [votes, setVotes] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0})

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)

  const GetRandom = () => {
    setSelected(RandNum(anecdotes.length))
  }
  
  const incVote = (selected) => {
    const copy = {...votes}
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div className='bg-dark rounded container text-light d-flex flex-column container pt-4'>
      <h1>Anecdote of the day:</h1>
      {anecdotes[selected]}
      <div>
        <Button text="next" clickHandler= {()=> GetRandom()} />
        <Button text= {votes[selected]} clickHandler= {()=> incVote(selected)}/>
      </div>
      <h2>Anecdote with most votes:</h2>
        <TopVote anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App
