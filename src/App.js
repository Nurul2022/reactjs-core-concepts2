import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers (){
  const [users, setUsers] = useState([]);
  useEffect( () =>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  }, [])
  return (
    <div>
      <h2>External Users </h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email= {user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return (
    <div style={{border: '2px solid red', margin: '20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
      </div>
    
  )
}

function Counter(){
  const [count, setCount] = useState(55);

  const increaseCount = () =>setCount(count + 1);
  const decreaseCount = () =>setCount(count - 1);
      
  // const increaseCount = () =>{
  //   const newCount = count + 1; 
  //   setCount(newCount);
  // }
  
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;









/*
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Laptop', price: 153000},
    {name: 'Phone', price: 93000},
    {name: 'Watch', price: 33000},
    {name: 'Tab', price: 5000}
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
     // <Product name="laptop" price= "52000"></Product>
     // <Product name="phone" price="85000"></Product>
     // <Product name="watch" price="15000"></Product>
    </div>
  );
}

function Product(props){
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
 */ 