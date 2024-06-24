import React from "react";
import Curriculum from "../../Curriculum/Curriculum";

function Webcurriculum() {
  const faqData = [
    {
      question: "Week 1: Introduction to Web Development & HTML Basics",
      answer: [
        "1) Introduction to Web Development",<br />,
        "2) Basic HTML Structure",<br />,
        "3) Creating a Simple Webpage",<br />,
        "4) Images and Media",<br />,
        "5) Forms and Tables",
      ],
    },
    {
      question: "Week 2: Advanced HTML & Introduction to CSS",
      answer: [
        "1) Review of HTML Basics and Best Practices",<br />,
        "2) Introduction to CSS",<br />,
        "3) Styling Text and Layouts",<br />,
        "4) Box Model and Positioning",<br />,
        "5) Simple Webpage Styling",
      ],
    },
    {
      question: "Week 3: Advanced CSS & Introduction to JavaScript",
      answer: [
        "1) Introduction to Advanced CSS",<br />,
        "2) Integrating HTML and CSS for a complete webpage",<br />,
        "3) Introduction to JavaScript",<br />,
        "4) JavaScript Basics",<br />,
        "5) JavaScript in the Browser",
      ],
    },
    {
      question: "Week 4: Advanced JavaScript",
      answer: [
        "1) Advanced JavaScript Concepts", <br />,
        "2) Basic JavaScript Projects",<br />,
        "3) Practical JavaScript Applications",<br />,
        "4) Callbacks, promises, async/await",<br />,
        "5) Control Structures",
      ],
    },
    {
      question: "Week 5: Revision & Project Week",
      answer: [
        "1) JavaScript ES6+",<br />,
        "2) HTML Revision",<br />,
        "3) CSS Revision",<br />,
        "4) JavaScript Revision",<br />,
        "5) Project Review & Closure",
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
