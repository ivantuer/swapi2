import React, { Component } from 'react'

class Starship extends Component {
  state = {
    pilots: [],
    films: [],
  }
  componentWillUnmount() {
    this.setState({
      pilots: [],
      films: [],
    })
  }
  componentWillMount() {
    const { curJson } = this.props
    curJson.pilots &&
      curJson.pilots.map(el =>
        fetch(el)
          .then(res => res.json())
          .then(res => {
            const newChar = [...this.state.pilots, res]
            this.setState({
              pilots: newChar,
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
    const { pilots, films } = this.state
    return (
      <div className="field-element">
        <div className="about">
          <p>
            Starship Name : <span>{curJson.name}</span>
          </p>
          <p>
            Model : <span>{curJson.model}</span>
          </p>
          <p>
            Passengers : <span>{curJson.passengers}</span>
          </p>
        </div>

        <div className="flex-container">
          <div className="flex">
            <p>PILOTS</p>
            {pilots.length ? (
              pilots.map(el => (
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

export default Starship
