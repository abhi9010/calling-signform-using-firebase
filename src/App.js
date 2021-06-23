
import axios from 'axios';
import React, { useState } from 'react'
import './App.css'
export default function App() {
  const [data, setData] = useState({
    number: " ",
    email: " ",
    password: " "
  })
  const { number, email, password } = data;
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const submitHandler = e => {
    e.preventDefault();
    axios.post('https://signup-fd821-default-rtdb.firebaseio.com/abhi.json', data).then(() => {
      alert("submitted");
    })
    //console.log(data);


  }
  return (
    <div>
      <center>
        <form autoComplete="off" onSubmit={submitHandler}>
          <input type="number" name="number" placeholder="number" value={number} onChange={changeHandler} /> <br />
          <input type="email" name="email" placeholder="email" value={email} onChange={changeHandler} /> <br />
          <input type="password" name="password" placeholder="password" value={password} onChange={changeHandler} /> <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  )
}
