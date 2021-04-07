import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const Course = () => {
  const [course, setCourse] = useState(courses)
  return (
    <nav className='chapters-list'>
      <h2>Course Page</h2>
      <h3>Chapters list</h3>
      {course.map((item) => {
        return (
          <Link to={`/course/${item.id}`} key={item.id}>
            <div className='chapter-item box box-sm'>
              <i className='box-icon'>
                <div>
                  <i className='emoji'>{item.emoji}</i>
                </div>
              </i>
              <div className='box-content'>
                <strong>{item.title}</strong>
                <span className='sub-text'>{item.text}</span>
              </div>
            </div>
          </Link>
        )
      })}
    </nav>
  )
}

export default Course
