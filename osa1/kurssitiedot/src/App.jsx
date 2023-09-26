
// Header render course name
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
      <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.exercises[0].name} exercises={props.exercises[0].exercises}/>
      <Part part={props.exercises[1].name} exercises={props.exercises[1].exercises}/>
      <Part part={props.exercises[2].name} exercises={props.exercises[2].exercises}/>
    </div>
  );
}


// Total render total number of exercises
const Total = (props) => {
  // calculate the number of exercises from array of objects
  let total = 0;

  props.exercises.forEach(item => {
    total += item.exercises
  });

  return(
    <p>Number of exercises {total}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14}
  ]

  return (
    <div>
      <Header course={course}/>s
      <Content exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

export default App