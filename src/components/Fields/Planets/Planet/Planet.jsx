import React, { Component } from 'react'

class Planet extends Component {
  state = {
    residents: [],
    films: [],
  }
  componentWillUnmount() {
    this.setState({
      residents: [],
      films: [],
    })
  }
  componentWillMount() {
    const { curJson } = this.props
    curJson.residents &&
      curJson.residents.map(el =>
        fetch(el)
          .then(res => res.json())
          .then(res => {
            const newChar = [...this.state.residents, res]
            this.setState({
              residents: newChar,
            })
          })
      )
    curJson.films &&
      curJson.films.map(el =>
        fetch(el)
          .then(res => res.json())
          .then(res => {
            const newChar = [...this.state.films, res]
            this.setState({
              films: newChar,
            })
          })
      )
  }
  render() {
    const { curJson, changePage } = this.props
    const { residents, films } = this.state
    return (
      <div className="field-element">
        <div className="about">
          <p>
            Planet Name : <span>{curJson.name}</span>
          </p>
          <p>
            Climate : <span>{curJson.climate}</span>
          </p>
          <p>
            Terrain : <span>{curJson.terrain}</span>
          </p>
          <p>
            Population : <span>{curJson.population}</span>
          </p>
        </div>

        <div className="flex-container">
          <div className="flex">
            <p>RESIDENTS</p>
            {residents.length ? (
              residents.map(el => (
                <li key={el.name} onClick={() => changePage(el.url)}>
                  {el.name}
                </li>
              ))
            ) : (
              <li>-</li>
            )}
          </div>
          <div className="flex">
            <p>FILMS</p>
            {films.map(el => (
              <li key={el.title} onClick={() => changePage(el.url)}>
                {el.title}
              </li>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Planet
