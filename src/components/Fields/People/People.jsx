import React from 'react'

import Person from './Person/Person'

const People = ({ curJson, changePage, value, inputSearch, pageNumber }) => {
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
            key={el.name}
            onClick={() => {
              changePage(el.url)
            }}
          >
            {el.name}
          </li>
        ))}
      {curJson && curJson.name && (
        <Person curJson={curJson} changePage={changePage} />
      )}
      {curJson && curJson.count && (
        <div className="buttons">
          <button
            onClick={() => {
              curJson.previous && changePage(curJson.previous)
            }}
          >
            <i className="fas fa-backward" />
          </button>
          <span>{pageNumber}</span>
          <button
            onClick={() => {
              curJson.next && changePage(curJson.next)
            }}
          >
            <i className="fas fa-forward" />
          </button>
        </div>
      )}
    </div>
  )
}

export default People
