import React from 'react'
import './ButtonMain.css'
import { Link } from 'react-router-dom'

function ButtonMain({ text, link }) {
  return (
    <>
      <Link to={link} className='book-appointment-button'>
        {text}
      </Link>
    </>
  )
}

export default ButtonMain
