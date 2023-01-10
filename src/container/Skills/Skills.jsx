import React, { useState, useEffect } from 'react';
// import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import './Skills.scss';
import { SkillsData, ExperiencesData } from './SkillsData'
import { Tooltip as ReactTooltip } from 'react-tooltip'






const Skills = () => {

  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    setSkills(SkillsData)
    setExperiences(ExperiencesData)


  }, [])


  return (
    <>
      {/* <h2 className="head-text">Skills & Experience</h2> */}
      <h2 className="head-text">Ski<span style={{textTransform: 'lowercase'}}>lls</span></h2>

      <div className="app__skills-container">
        <motion.div
          className="app__skills-list"
        >
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              {/* <div className="app__flex" style={{backgroundColor: skill.bgColor}}> */}
              <div className="app__flex">
                <img src={skill.imgUrl} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
{/* 
        <motion.div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {experience?.works.map((work) => (

                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.id}
                      key={work.name}
                      id={work.id} data-tooltip-content={work.desc}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>

                    </motion.div>
                    
                  </>
                ))}
              </motion.div>

            </motion.div>
          ))}
        </motion.div> */}



      </div>
    </>
  )
}

// export default AppWrap(Skills, 'skills')
export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
)