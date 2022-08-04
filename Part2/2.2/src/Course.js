import React from 'react'

function Course (props) {
    const { courses } = props
    return (
        <div>
            <Header course={courses.name} />
            {courses.parts.map((part)=>    
                <Content key={part.id} name = {part.name} />
            )}
            <Total parts={courses.parts}/>
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
  }
  
  const Content = (props) => {
    return (
        <h2>
          {props.name}
        </h2>
    )
  }
  
  const Total = ({parts}) => {
    return (
      <div>
        <h3>Number of exercises {parts.map((part)=> part.exercises).reduce((a,b)=> a+b)}</h3>
      </div>
    )
  }

export default Course
