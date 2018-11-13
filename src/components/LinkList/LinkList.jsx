import React from 'react'

import './LinkList.scss'

const LinkList = ({ changeField, currentField }) => {
  return (
    <ul className="list-flex">
      <li
        className={`${currentField === 'films' && 'current'}`}
        onClick={changeField}
      >
        Films
      </li>
      <li
        className={`${currentField === 'people' && 'current'}`}
        onClick={changeField}
      >
        People
      </li>
      <li
        className={`${currentField === 'planets' && 'current'}`}
        onClick={changeField}
      >
        Planets
      </li>
      <li
        className={`${currentField === 'species' && 'current'}`}
        onClick={changeField}
      >
        Species
      </li>
      <li
        className={`${currentField === 'starships' && 'current'}`}
        onClick={changeField}
      >
        Starships
      </li>
      <li
        className={`${currentField === 'vehicles' && 'current'}`}
        onClick={changeField}
      >
        Vehicles
      </li>
    </ul>
  )
}

export default LinkList
