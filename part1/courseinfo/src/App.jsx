const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}


const Content = (props) => {
  const p_parts = array => {
    
  
  return (
    <>
      {
	props.parts.forEach(part => <p>{part.name} {part.exercises}</p>)
      }
    </>
  )
}


const Total = (props) => {
  const sum = array => {
    let count = 0
    array.forEach(part => {
      count += part.exercises
    })

    return count
  }
  
  return (
    <>
      <p>Number of exercises {sum(props.parts)}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React', exercises: 10
    },
    {
      name: 'Using props to pass data', exercises: 7
    },
    {
      name: 'State of a component', exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
