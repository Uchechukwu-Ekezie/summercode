import React from 'react'
import Ment from '../../Meant/Meant'

function AiMeant() {
    const aiCourse = {
        title: "Who is the course for?",
        description: "This course is for anyone who wants to understand and apply artificial intelligence concepts and techniques. It is suitable for beginners and intermediate learners. No prior knowledge of AI or machine learning is required. You'll explore the fundamentals of AI, including machine learning, neural networks, and data analysis, and learn how to build AI models from scratch."
      };
      
  return (
    <div>
        <Ment title={aiCourse.title} description={aiCourse.description}/>
    </div>
  )
}

export default AiMeant