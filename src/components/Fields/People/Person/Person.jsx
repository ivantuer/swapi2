import React, { Component } from 'react'

class Person extends Component {
  state = {
    homeworld: [],
    species: [],
    starships: [],
    vehicles: [],
  }
  componentWillUnmount() {
    this.setState({
      homeworld: [],
      species: [],
      starships: [],
      vehicles: [],
    })
  }
  componentWillMount() {
    const { curJson } = this.props
    fetch(curJson.homeworld)
      .then(res => res.json())
      .then(res => this.setState({ homeworld: res }))
    curJson.species &&
      curJson.species.map(el =>
        fetch(el)
          .then(res => res.json())
          .then(res => {
            const newChar = [...this.state.species, res]
            this.setState({
              species: newChar,
            })
          })
      )
    curJson.starships &&
      curJson.starships.map(el =>
        fetch(el)
          .then(res => res.json())
          .then(res => {
            const newChar = [...this.state.starships, res]
            this.setState({
              starships: newChar,
            })
          })
      )
    curJson.vehicles &&
      curJson.vehicles.map(el =>
        fetch(el)
          .then(res => res.json())
          .then(res => {
            const newChar = [...this.state.vehicles, res]
            this.setState({
              vehicles: newChar,
            })
          })
      )
  }
  render() {
    const { curJson, changePage } = this.props
    const { homeworld, species, starships, vehicles } = this.state
    return (
      <div className="field-element">
        <div className="about">
          <p>
            Name : <span>{curJson.name}</span>
          </p>
          <p>
            Hair Color : <span>{curJson.hair_color}</span>
          </p>
          <p>
            Mass : <span>{curJson.mass}</span>
          </p>
          <p>
            Height <span>{curJson.height}</span>
          </p>
        </div>

        <div className="flex-container">
          <div className="flex">
            <p>HOMEWORLD</p>
            <li onClick={() => changePage(homeworld.url)}>
              {homeworld.name ? homeworld.name : '-'}
            </li>
          </div>

          <div className="flex">
            <p>SPECIES</p>
            {species.length ? (
              species.map(el => (
                <li key={el.name} onClick={() => changePage(el.url)}>
                  {el.name}
                </li>
              ))
            ) : (
              <li>-</li>
            )}
          </div>
          <div className="flex">
            <p>STARSHIPS</p>
            {starships.length ? (
              starships.map(el => (
                <li key={el.name} onClick={() => changePage(el.url)}>
                  {el.name}
                </li>
              ))
            ) : (
              <li>-</li>
            )}
          </div>
          <div className="flex">
            <p>VEHICLES</p>
            {vehicles.length ? (
              vehicles.map(el => (
                <li key={el.name} onClick={() => changePage(el.url)}>
                  {el.name}
                </li>
              ))
            ) : (
              <li>-</li>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Person
