import React from 'react'

const Header = ({count}) => {
  return (
    <header className='center'>
        <h1>CLOZD coding test</h1>
        <h2>Users: {count}</h2>
    </header>
  )
}

export default Header