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
        {
          name: "Bola Akinyele",
          testimonial: `Enrolling my child in this program has been transformative. The teachers are not only highly skilled but also deeply caring.
          My child has developed a genuine love for learning and a sense of curiosity that I hadn’t seen before. The community aspect of the program is also a huge plus,
          making us feel like we're part of a big, supportive family. I highly recommend this program to other parents.`,
        },
        {
          name: "Fatima Garba",
          testimonial: `The impact this program has had on my child's education is outstanding. The structured and engaging curriculum keeps my child excited about learning.
          The progress we've seen in their academic abilities and social skills is phenomenal. The program’s inclusive and nurturing environment is exactly what we were looking for.
          This program is a fantastic choice for any parent wanting the best for their child.`,
        },
        {
          name: "Olumide Ajayi",
          testimonial: `Since joining this program, my child's attitude towards school has completely changed. The educators are incredibly passionate and the curriculum is both challenging and enjoyable.
          My child has shown significant improvement in both their grades and self-confidence. I am thankful for the positive and encouraging atmosphere provided by this program.
          I strongly recommend it to other parents.`,
        },
        {
          name: "Zainab Mohammed",
          testimonial: `This program has been exceptional for my child’s growth. The dedication of the teachers and the comprehensive curriculum have made a significant difference in my child’s education journey.
          The supportive and collaborative environment has also fostered great friendships and social skills. I am extremely pleased with the progress my child has made and would highly recommend this program to others.`,
        }
      ];
  return (
    <div>
        <Testimonials testimonials={ParentData}/>
    </div>
  )
}

export default ParentTest