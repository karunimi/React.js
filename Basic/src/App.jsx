import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
    setName(''); // Clearing the input field after submission
  };

  return (
    <>

      <h1>Lets try to work out with few basic </h1>
      <input type="text"></input>
      <h2>Hi! This is Karthikaa!</h2>
      <div>
        <h2>My Skills </h2>
        <ul>
          <li>Pen Tester</li>
          <li>Web Developer</li>
          <li>Machine learning</li>
        </ul>
      </div>
      <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name: 
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedName && <p>Hi, {submittedName}!</p>}
    </div>

    </>
  )
}

export default App
