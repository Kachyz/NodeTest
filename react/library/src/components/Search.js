import React from 'react'

function Search(props) {
  const { value } = props
  return <input id="search" onKeyUp={value} />
}

export default Search