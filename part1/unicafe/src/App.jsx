import { useState } from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const StatisticRow = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {

  const all = () => good + neutral + bad
  const average = () => (1*good + 0*neutral + (-1)*bad) / all()
  const positivePerc = () => 100 * good / all()

  if (all() == 0) return (
    <>
    <h1>statistics</h1>
    <div>No feedback given</div>
    </>
  )
  return (
    <>
    <h1>statistics</h1>
    <table>
      <tbody>
      <StatisticRow text="good" value={good} />
      <StatisticRow text="neutral" value={neutral} />
      <StatisticRow text="bad" value={bad} />
      <StatisticRow text="all" value={all()} />
      <StatisticRow text="average" value={average()} />
      <StatisticRow text="positive" value={positivePerc().toString() + " %"} />
      </tbody>
    </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give Feedback</h1>
      <Button onClick={() => setGood(good+1)} text="good" />
      <Button onClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button onClick={() => setBad(bad+1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App