import React from "react";
import Curriculum from "../../Curriculum/Curriculum";

function Webcurriculum() {
  const faqData = [
    {
      question: "Week 1: Introduction to Web Development & HTML Basics",
      answer: [
        "Introduction to Web Development",<br />,
        "Basic HTML Structure",<br />,
        "Creating a Simple Webpage",<br />,
        "Images and Media",<br />,
        "Forms and Tables",
      ],
    },
    {
      question: "Week 2: Advanced HTML & Introduction to CSS",
      answer: [
        "Review of HTML Basics and Best Practices",<br />,
        "Introduction to CSS",<br />,
        "Styling Text and Layouts",<br />,
        "Box Model and Positioning",<br />,
        "Simple Webpage Styling",
      ],
    },
    {
      question: "Week 3: Advanced CSS & Introduction to JavaScript",
      answer: [
        "Introduction to Advanced CSS",<br />,
        "Integrating HTML and CSS for a complete webpage",<br />,
        "Introduction to JavaScript",<br />,
        "JavaScript Basics",<br />,
        "JavaScript in the Browser",
      ],
    },
    {
      question: "Week 4: Advanced JavaScript",
      answer: [
        "Advanced JavaScript Concepts", <br />,
        "Basic JavaScript Projects",<br />,
        "Practical JavaScript Applications",<br />,
        "Callbacks, promises, async/await",<br />,
        "Control Structures",
      ],
    },
    {
      question: "Week 5: Revision & Project Week",
      answer: [
        "JavaScript ES6+",<br />,
        "HTML Revision",<br />,
        "CSS Revision",<br />,
        "JavaScript Revision",<br />,
        "Project Review & Closure",
      ],
    },
  ];

  return (
    <div>
        <Curriculum faqs={faqData}/>
    </div>
  )

}

export default Webcurriculum;
