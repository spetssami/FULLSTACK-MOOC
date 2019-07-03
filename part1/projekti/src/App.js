import React from 'react';
import Course from './Course';
import courses from './Courses';


const App = () => {
  
  const createCourse = courses.map((course) => {
    return <Course course = {course} />
  })
  return (
    <div>
      {createCourse}
    </div>
  )
}
export default App;