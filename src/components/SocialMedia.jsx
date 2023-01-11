import React from 'react'
import {BsLinkedin, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href="https://www.linkedin.com/in/edwin-pile-583652234" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
        </a>
        <a href="https://github.com/EPraz" target="_blank" rel="noopener noreferrer">
            <BsGithub />
        </a>
        {/* <Link to="https://github.com/EPraz" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
        </Link> */}
    </div>
  )
}

export default SocialMedia