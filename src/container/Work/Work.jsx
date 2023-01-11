import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import './Work.scss';
import { WorkData } from './WorkData'


const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])
  const [activeClick, setActiveClick] = useState(false)


  useEffect(() => {
    setFilterWork(WorkData)
    setWorks(WorkData)
  }, [])


  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)

  }

  return (
    <>
      <h2 className="head-text"><span>Projects</span> Section</h2>
      <div className='app__work-filter'>
        {['All' ,'React JS', 'react/django', 'Django'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ""}`}

          >
            {item}


          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {/* {WorkData?.length > 0 ? "Here" : "empty"} */}
        {/* {WorkData[0].description} */}

        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"

              >
                <a onClick={() => {setActiveClick((prevActiveClick) => !prevActiveClick)}}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              {activeClick &&
                <ul>
                  <p>Remarkable Skills Used:</p>
                  {work.skills_used.split(",").map((word, index) => (
                    <li key={index}>{word}</li>
                  ))}
                </ul>
              }
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags}</p>
              </div>
            </div>
          </div>
        ))}

      </motion.div>

    </>
  )
}

// export default AppWrap(Work, 'work')
export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
)