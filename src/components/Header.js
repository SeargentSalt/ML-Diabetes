import React from 'react'

export default function Header() {
  return (
    <header style ={headerStyle}>
      <h1>Toe Sucker</h1>
    </header>
  )
}

const headerStyle = {
    background: '#8053c9',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }