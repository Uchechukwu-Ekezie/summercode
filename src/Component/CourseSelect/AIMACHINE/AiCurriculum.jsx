import React from "react";
import Curriculum from "../../Curriculum/Curriculum";

function AICurriculum() {
  const faqData = [
    {
      question: "Week 1: Introduction to AI",
      answer: [
        "1) Basics of AI",<br />,
        "2) AI in Everyday Life",<br />,
        "3) Interactive Sessions with AI",<br />,
        "4) Identifying AI Applications",<br />,
        "5) Exploring AI-Powered Tools",
      ],
    },
    {
      question: "Week 2: Basics of Machine Learning",
      answer: [
        "1) Introduction to Machine Learning",<br />,
        "2) Understanding Data and Predictions",<br />,
        "3) Pattern Recognition Games",<br />,
        "4) Training Simple AI Models",<br />,
        "5) Experimenting with Image Recognition",
      ],
    },
    {
      question: "Week 3: AI and Everyday Life",
      answer: [
        "1) AI in Smart Homes",<br />,
        "2) AI in Education",<br />,
        "3) AI in Healthcare",<br />,
        "4) AI in Transportation",<br />,
        "5) AI in Environmental Protection",
      ],
    },
    {
      question: "Week 4: Ethics and AI",
      answer: [
        "1) Positive and Negative Uses of AI", <br />,
        "2) Privacy Concerns",<br />,
        "3) Fairness in AI",<br />,
        "4) Impact of AI on Jobs",<br />,
        "5) Responsible AI Use",
      ],
    },
    {
      question: "Week 5: Projects and Creativity",
      answer: [
        "1) Planning AI Projects",<br />,
        "2) Working on Individual or Group Projects",<br />,
        "3) Applying AI Knowledge",<br />,
        "4) Presenting Project Results",<br />,
        "5) Celebrating Completed Projects",
      ],
    },
  ];

  return (
    <div>
      <Curriculum faqs={faqData} />
    </div>
  );
}

export default AICurriculum;
