import React from 'react'
import Testimonials from './Testimonial';

function ParentTest() {

    const ParentData = [
        {
          name: "Okusun Okonduwa",
          testimonial: `Enrolling my child in this program has been the best decision
          we've made. The instructors are incredibly supportive and
          knowledgeable, and my child has shown tremendous growth in both
          academics and confidence. The community is welcoming and the
          resources are top-notch. I highly recommend this program to any
          parent looking to provide their child with an excellent
          educational experience.`,
        },
        {
          name: "Chinelo Eze",
          testimonial: `I am incredibly impressed with the progress my child has made since joining this program.
          The dedicated staff and well-structured curriculum have fostered a love for learning in my child.
          The environment is nurturing and inclusive, making it a wonderful place for any child to thrive.`,
        },
        {
          name: "Ifeanyi Nwosu",
          testimonial: `This program has exceeded my expectations in every way.
          My child's confidence has soared, and their academic performance has improved significantly.
          The support and encouragement from the instructors have been phenomenal.
          I wholeheartedly recommend this program to other parents.`,
        },
        {
          name: "Adebayo Adediran",
          testimonial: `Joining this program has been a game-changer for our family.
          The holistic approach to education has not only enhanced my child's knowledge but also their social skills.
          The sense of community and the top-notch resources make this program stand out.
          I am grateful for the positive impact it has had on my child.`,
        },
        {
          name: "Ngozi Umeh",
          testimonial: `The transformation in my child since enrolling in this program has been remarkable.
          The engaging curriculum and the supportive educators have made learning enjoyable and effective.
          My child is more enthusiastic about school and has developed a strong foundation for future success.
          I highly recommend this program to other parents seeking quality education for their children.`,
        },
        {
          name: "Emeka Okeke",
          testimonial: `This program has been a blessing for my family.
          My child looks forward to going to school every day, thanks to the dynamic and caring teachers.
          The personalized attention and the well-rounded curriculum have significantly boosted my child's confidence and academic performance.
          I can't recommend this program enough to other parents.`,
        },
      ];
  return (
    <div>
        <Testimonials testimonials={ParentData}/>
    </div>
  )
}

export default ParentTest