import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { AppWrap, MotionWrap } from '../../wrapper'
import './Testimonial.scss'
// import {TestimonialsData} from './TestimonialsData'

const Testimonial = () => {
  
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    // setTestimonials(TestimonialsData)
  
  }, [])


  const test = testimonials[currentIndex]

  

  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={testimonials[currentIndex].imgUrl} alt="testimonial" />
            <div className='app__testimonial-content'>
              <p className='p-text'>{test.feedback}</p>
              <div>
                <h4 className='bold-text'>{Text.name}</h4>
                <h5 className='p-text'>{Text.name}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}


      <div className='app__testimonials-brands app__flex'>
        {brands.map((map) => (
          <motion.div
            whileInView={{opacity: [0,1]}}
            transition={{duration: 0.5, type: 'tween'}}
            key={brands._id}
          >
            <img src={brands.imgUrl} alt={brands.name} />
          </motion.div>
        ))}
      </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
)