import React, { useState } from 'react';

const Curriculum = ({ faqs }) => {
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (index) => {
    setVisibleAnswers((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section className="pt-16 pb-10 bg-yellow-500 border-gray-800" data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in">
      <h1 className="mb-8 text-4xl text-center text-white">Course Curriculm</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="w-3/5 mx-auto mb-4">
          <button
            onClick={() => toggleAnswer(index)}
            className="flex items-center justify-between w-full p-4 pb-5 text-xl text-white bg-slate-500"
          >
            {faq.question}
            <img src="/Assets/Image/plus.png" className="w-6" alt="Toggle Answer" />
          </button>
          {visibleAnswers[index] && (
            <div className="p-4 text-lg text-left text-white bg-slate-500 ">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Curriculum;
