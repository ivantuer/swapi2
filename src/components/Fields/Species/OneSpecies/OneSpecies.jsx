import React, { Component } from 'react'

class OneSpecies extends Component {
  state = {
    people: [],
    films: [],
  }
  componentWillUnmount() {
    this.setState({
      people: [],
      films: [],
    })
  }
  componentWillMount() {
    const { curJson } = this.props
    curJson.people &&
      curJson.people.map(el =>
        fetch(el)
          .then(res => res.json())
          .then(res => {
            const newChar = [...this.state.people, res]
            this.setState({
              people: newChar,
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
    const { people, films } = this.state
    return (
      <div className="field-element">
        <div className="about">
          <p>
            Species Name : <span>{curJson.name}</span>
          </p>
          <p>
            Language : <span>{curJson.language}</span>
          </p>
          <p>
            Classification : <span>{curJson.classification}</span>
          </p>
        </div>
        <div className="flex-container">
          <div className="flex">
            <p>PEOPLE</p>
            {people.length ? (
              people.map(el => (
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

export default OneSpecies
