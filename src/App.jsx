import React, { Component } from 'react'
import UfCode from './components/UfCode'
import getUfCode from './api/getUfCode'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      uf: ''
    }
  }

  componentDidMount () {
    getUfCode().then(code => this.setUfCode(code))
  } 

  setUfCode = code => this.setState(state => state.uf = code)

  render() {
    return (
      <main className="main">
        <UfCode code={this.state['uf']}></UfCode>
      </main>
    )
  }
}

export default App
