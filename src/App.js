import React, { Component } from 'react'
// import Form from 'react-jsonschema-form'
import axios from 'axios'
import Animal from './Animal'

class App extends Component {
  state = {
    animals: [],
    species: '',
    sum: '',
    seen_count: ''
  }

  getAllTheAnimal = () => {
    axios.get(`http://localhost:3000/animals`).then(response => {
      this.setState({ animals: response.data })
    })
  }

  total = () => {
    axios.get(`http://localhost:3000/animals/total`).then(response => {
      console.log(response.data)
      this.setState({
        total: response.data
      })
    })
  }

  componentDidMount() {
    this.getAllTheAnimal()
    this.total()
  }

  render() {
    return (
      <div className="container">
        <p> All Animals:</p>
        <ul>
          {this.state.animals.map(animal => {
            return (
              <Animal
                key={animal.id}
                animal={animal}
                getAllTheAnimal={this.getAllTheAnimal}
              />
            )
          })}
        </ul>
        <p>the total amount of animal is {this.state.total}!!!!!</p>
      </div>
    )
  }
}

export default App
