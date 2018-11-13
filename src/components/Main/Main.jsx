import React, { Component } from 'react'
import LinkList from '../LinkList/LinkList'

import Films from '../Fields/Films/Films'
import People from '../Fields/People/People'
import Planets from '../Fields/Planets/Planets'
import Species from '../Fields/Species/Species'
import Starships from '../Fields/Starships/Starships'
import Vehicles from '../Fields/Vehicles/Vehicles'

class Main extends Component {
  state = {
    currentField: '',
    pageNumber: 1,
  }
  changeField = e => {
    this.setState({
      currentField: e.target.innerText.toLowerCase(),
      curJson: undefined,
      value: '',
      pageNumber: 1,
    })
    fetch(`https://swapi.co/api/${e.target.innerText.toLowerCase()}`)
      .then(res => res.json())
      .then(res => this.setState({ curJson: res }))
  }
  inputSearch = e => {
    const { currentField } = this.state
    this.setState({
      value: e.target.value,
      currentField: `https://swapi.co/api/${currentField}/?search=${
        e.target.value
      }`,
      pageNumber: 1,
    })
    this.changePage(
      `https://swapi.co/api/${currentField}/?search=${e.target.value}`
    )
  }
  changePage = url => {
    this.setState({
      currentPage: url,
      currentField: url.split('/')[4],
      pageNumber: url.indexOf('search') === -1 ? url.split('=')[1] : 1,
    })
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ curJson: res }))
  }
  section = () => {
    const { curJson, value, pageNumber } = this.state
    switch (this.state.currentField) {
      case 'films':
        return (
          <Films
            pageNumber={pageNumber}
            curJson={curJson}
            changePage={this.changePage}
            value={value}
            inputSearch={this.inputSearch}
          />
        )
      case 'people':
        return (
          <People
            pageNumber={pageNumber}
            curJson={curJson}
            changePage={this.changePage}
            value={value}
            inputSearch={this.inputSearch}
          />
        )
      case 'planets':
        return (
          <Planets
            pageNumber={pageNumber}
            curJson={curJson}
            changePage={this.changePage}
            value={value}
            inputSearch={this.inputSearch}
          />
        )
      case 'species':
        return (
          <Species
            pageNumber={pageNumber}
            curJson={curJson}
            changePage={this.changePage}
            value={value}
            inputSearch={this.inputSearch}
          />
        )
      case 'starships':
        return (
          <Starships
            pageNumber={pageNumber}
            curJson={curJson}
            changePage={this.changePage}
            value={value}
            inputSearch={this.inputSearch}
          />
        )
      case 'vehicles':
        return (
          <Vehicles
            pageNumber={pageNumber}
            curJson={curJson}
            changePage={this.changePage}
            value={value}
            inputSearch={this.inputSearch}
          />
        )
      default:
        return ''
    }
  }
  render() {
    const { currentField } = this.state
    return (
      <div>
        <LinkList currentField={currentField} changeField={this.changeField} />
        {this.section()}
      </div>
    )
  }
}

export default Main
