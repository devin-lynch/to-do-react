import React from 'react';
import ReactDOM from 'react-dom/client'
import MyList from './MyList';
import './index.css';

const toDos = ['Listen to Hop Along', 'Drink fresh lemonade', 'Eat bacon and egg tacos']

// ReactDOM.render(
//   <MyList
//   theList={toDos}
//   />,
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyList theList={toDos} />
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
