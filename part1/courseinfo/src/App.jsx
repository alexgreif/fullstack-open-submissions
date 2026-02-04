
const Header = (props) => (<h1>{props.title}</h1>)

const Part = (props) => <p>{props.name} {props.exercises}</p>

const Content = (props) => (
  props.parts.map((part) => <Part name={part.name} exercises={part.exercises}/>)
)

const Total = (props) => {
  const total_exercises = props.exercises.reduce((a, b) => a+b, 0)
  return (<p>Number of exercises {total_exercises}</p>)
}


const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  const parts = [
    {name: part1, exercises: exercises1},
    {name: part2, exercises: exercises2},
    {name: part3, exercises: exercises3}
  ]

  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total exercises={parts.map((part) => (part.exercises))} />
    </div>
  )
}

export default App