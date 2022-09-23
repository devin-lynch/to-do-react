import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'



class MyList extends Component {

  state = {
    taskArray: this.props.theList,
    newItem: '' // the value of the form input
  }

  // sets array to be empty
  clearList = () => {
    console.log('THIS IS THE CONSOLE LOG', 'clearing list!')
    this.setState({
        taskArray: []
      })
  }

  // handle input change events
  handleChange = e => {
    console.log('input was changed!')
    this.setState({
      newItem: e.target.value
    })
  }

  // handle form submission events
  addItem = e => {
    e.preventDefault()
    console.log('The form was submitted!')
    this.setState(prevState => {
      return {
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem: ''
      }
    })
  }


  render() {
    let todoItems = this.state.taskArray.map((item, i) => {
      return <ListItem
              task={item} key={`task=${i}`}   
              />
    })
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <form onSubmit={this.addItem}>
          <label htmlFor='newItem'>New Todo: </label>
          <input type="text"
          placeholder="Type an item here"
          onChange={this.handleChange}
          value={this.state.newItem}
          />
          <button type={"submit"}>Add it!</button>
        </form>
        <ul>
         {todoItems}
        </ul>
        <button onClick={this.clearList}>Finished the list!</button>
      </div>
    )
  }
}

export default MyList