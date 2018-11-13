import React, { Component } from 'react'

class Film extends Component {
  state = {
    characters: [],
    species: [],
    starships: [],
    vehicles: [],
    planets: [],
  }
  componentWillUnmount() {
    this.setState({
      characters: [],
      species: [],
      starships: [],
      vehicles: [],
      planets: [],
    })
  }
  componentWillMount() {
    const { curJson } = this.props
    curJson.characters &&
      curJson.characters.map(el =>
        fetch(el)
          .then(res => res.json())
          .then(res => {
            const newChar = [...this.state.characters, res]
            this.setState({
              characters: newChar,
            })
          })
      )
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
    curJson.planets &&
      curJson.planets.map(el =>
        fetch(el)
          .then(res => res.json())
          .then(res => {
            const newChar = [...this.state.planets, res]
            this.setState({
              planets: newChar,
            })
          })
      )
  }
  render() {
    const { curJson, changePage } = this.props
    const { characters, species, starships, vehicles, planets } = this.state
    return (
      <div className="field-element">
        <div className="about">
          <p>
            Film Title : <span>{curJson.title}</span>
          </p>
          <p>
            Director : <span>{curJson.director}</span>
          </p>
          <p>
            Episode #<span>{curJson.episode_id}</span>
          </p>
          <p>
            Release Date:{' '}
            <span>{curJson.release_date.split('-').join('.')}</span>
          </p>
        </div>

        <div className="flex-container">
          <div className="flex">
            <p>CHARACTERS</p>
            {characters.length ? (
              characters.map(el => (
                <li key={el.name} onClick={() => changePage(el.url)}>
                  {el.name}
                </li>
              ))
            ) : (
              <li>-</li>
            )}
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
          <div className="flex">
            <p>PLANETS</p>
            {planets.length ? (
              planets.map(el => (
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

export default Film
