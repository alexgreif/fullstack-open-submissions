
const Header = (props) => (<h1>{props.title}</h1>)

const Part = (props) => <p>{props.name} {props.exercises}</p>

const Content = (props) => (
  props.parts.map((part) => <Part name={part.name} exercises={part.exercises}/>)
)

const Total = (props) => {
  const total_exercises = props.parts.map(
    (part) => (part.exercises)
  ).reduce(
    (a, b) => a+b, 0
  )
  return (<p>Number of exercises {total_exercises}</p>)
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App