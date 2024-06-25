import React from 'react'
import Curriculum from '../../Curriculum/Curriculum';

function UiCurriculum() {
    const faqData = [
        {
          question: "Week 1: Introduction to Graphic Design",
          answer: [
            "1) What is Graphic Design?", <br />,
            "2) Elements and Principles of Design", <br />,
            "3) Introduction to Design Software", <br />,
            "4) Career Opportunities in Graphic Design", <br />,
            "5) Assignment 1: Design a Simple Poster"
          ],
        },
        {
          question: "Week 2: Mastering Adobe Photoshop",
          answer: [
            "1) Photoshop Basics", <br />,
            "2) Photo Editing and Manipulation", <br />,
            "3) Creating Digital Artwork", <br />,
            "4) Working with Layers, Masks, and Selections", <br />,
            "5) Assignment 2: Photo Manipulation Project"
          ],
        },
        {
          question: "Week 3: Exploring Adobe Illustrator",
          answer: [
            "1) Illustrator Basics", <br />,
            "2) Creating Logos and Icons", <br />,
            "3) Advanced Illustration Techniques", <br />,
            "4) Understanding Vectors and Paths", <br />,
            "5) Assignment 3: Logo Design Project"
          ],
        },
        {
          question: "Week 4: Designing for Print and Web with Canva",
          answer: [
            "1) Introduction to Canva", <br />,
            "2) Layout Design and Typography in Canva", <br />,
            "3) Creating Web Graphics in Canva",<br />, 
            "4) Understanding Print and Web Design", <br />,
            "5) Assignment 4: Magazine Cover Design in Canva"
          ],
        },
        {
          question: "Week 5: Building a Portfolio and Final Project",
          answer: [
            "1) Creating a Graphic Design Portfolio", <br />,
            "2) Final Project Planning", <br />,
            "3) Final Project Presentation", <br />,
            "4) Peer Review and Feedback Session", <br />,
            "5) Final Project: Comprehensive Design Project"
          ],
        },
      ];
      
  return (
    <div>
        <Curriculum faqs={faqData}/>
    </div>
  )
}

export default UiCurriculum