import React, { Component } from 'react'

import Film from './Film/Film'

class Films extends Component {
  render() {
    const { curJson, changePage, value, inputSearch } = this.props
    return (
      <div className="field-container">
        <input
          type="text"
          value={value}
          placeholder="Search..."
          onChange={inputSearch}
        />
        {curJson &&
          curJson.count &&
          curJson.results.map(el => (
            <li
              key={el.title}
              onClick={() => {
                changePage(el.url)
              }}
            >
              {el.title}
            </li>
          ))}
        {curJson && curJson.title && (
          <Film curJson={curJson} changePage={changePage} />
        )}
      </div>
    )
  }
}

export default Films
