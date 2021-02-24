import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
        <Person name="Tesla" age="73"></Person>
        <Person name="Einstein" age="80"></Person>
      </header>
    </div>
  );
}

// api
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
          users.map(user => 
            <div style={personStyle}>
              <li>Name: {user.name} </li>
              <li>Email: {user.email} </li>
            </div>
          )
        }
      </ul>
    </div>
  )
}

const personStyle = {
  border:'2px solid red',
  margin: '10px',
  padding: '10px',
  width: "400px"
}

function Person(props) {
  return (
    <div style={personStyle}>
      <h1>Name: {props.name} </h1>
      <h3>Age: {props.age} </h3>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    setCount (count + 1);
  };
  
  return(
    <div>
      <h1> Count: {count} </h1>
      <button onClick={ () => {if(count > 0)setCount(count-1)}}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
export default App;
