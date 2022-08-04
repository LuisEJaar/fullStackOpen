import React from 'react'

function Course (props) {
    const { courses } = props
    return (
        <div>
          <h1>Web development curriculum</h1>
          <div> 
            {courses.map((part)=>
                  <Section key={part.id} topic={part} /> 
            )}
          </div>
        </div>
        
    )
}

const Section = (props) => {
  return (
    <>
      <Title topic={props.topic.name}/>
      <ul>
        {props.topic.parts.map((part)=>
          <Content key={part.id} course={part} /> 
        )}
      </ul>
      <Total topic={props.topic}/>
    </>
  )
}

const Title = (props) => {
    return (
        <h2>{props.topic}</h2>
    )
  }
  
  const Content = ({course}) => {
    console.log('here')
    return (
        <li>
          {course.name} {course.exercises}
        </li>
    )
  }
  
  const Total = ({topic}) => {
    return (
      <div>
        <h4>Number of exercises {topic.parts.map((part)=> part.exercises).reduce((a,b)=> a+b)}</h4>
      </div>
    )
  }

export default Course
