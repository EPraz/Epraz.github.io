import React, {useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './About.scss';
import { AppWrap, MotionWrap } from '../../wrapper';

const abouts = [
  { title: 'FrontEnd', description: 'HTML/CSS/JS/React', imgUrl: images.frontend},
  { title: 'BackEnd', description: 'Python/Django', imgUrl: images.backend},
  { title: 'FullStack', description: 'React/Django', imgUrl: images.fullstack},
  // { title: 'React/Django', description: 'I am a good web developer.', imgUrl: images.about04},
]

const About = () => {
  return (
    <>
      <h2 className="head-text">"I Have No <span>Special Talent</span> <br />I am Just <span>Passionately Curious</span>"</h2>
      <p style={{fontSize: ".8em", fontStyle:"italic", fontWeight:"bold", letterSpacing: 2}} className="p-text">Albert Einstein</p>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div 
            whileInView={{ opacity: 1}}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 20 }} >{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__whitebg'
  )