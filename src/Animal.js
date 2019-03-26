import React, { Component } from 'react'
import axios from 'axios'

export default class Animal extends Component {
  delete = () => {
    axios
      .delete(`http://localhost:3000/animals/${this.props.animal.id}`)
      .then(response => {
        this.props.getAllTheAnimal()
      })
  }

  render() {
    return (
      <div>
        <li>
          <button onClick={this.delete}>Delete</button>
          {this.props.animal.species} is in{' '}
          {this.props.animal.last_seen_location} and the amount of{' '}
          {this.props.animal.species} is {this.props.animal.seen_count}.
        </li>
      </div>
    )
  }
}
