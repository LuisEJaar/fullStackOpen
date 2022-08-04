import React from 'react'

function Course (props) {
    const { courses } = props
    return (
        <div>
            <Header course={courses.name} />
            {courses.parts.map((part)=>    
                <Content key={part.id} name = {part.name} />
            )}
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
  
//   const Total = (props) => {
//     return (
//       <div>
//         <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//       </div>
//     )
//   }

export default Course
