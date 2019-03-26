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
    // const total = animals.reduce(
    //   (totalSeen_count, animal) => totalSeen_count + animal.seen_count,
    //   0
    // )

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
        <p>
          {/* {this.state.animals.total(
            (seen_count, animal => seen_count + animal.seen_count, 0)
          )} */}
          the total amount of animal is {this.state.total}!!!!!
        </p>
      </div>
    )
  }
}

export default App

// map(animal => {
//   return <Animal key={animal.id} animal={animal} total={this.total} />
// })

// const formSchema = {
//   title: 'Animal',
//   type: 'object',
//   required: ['species'],
//   properties: {
//     species: { type: 'string', title: 'Species', defalut: '' },
//     last_seen_location: {
//       type: 'string',
//       title: 'Last_seen_location',
//       defalut: ''
//     },
//     seen_count: { type: 'string', title: 'Seen_count', defalut: '' }
//   }
// }
