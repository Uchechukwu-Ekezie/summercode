import React from "react";

function TechSkill() {
  const icn = [
    {
      name: "Artifical Intelligence & Machine learning",
      img: "/Assets/Image/programmer.png",
    },
    {
      name: "Web Development",
      img: "/Assets/Image/web-dev.png",
    },
    {
      name: "Cyber Security",
      img: "/Assets/Image/app-development.png",
    },
    {
      name: "Digital Media",
      img: "/Assets/Image/analysis.png",
    },
  ];

  return (
    <div>
      <section className="py-20 text-white bg-yellow-500">
        <div className="container px-4 mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold">Corses We Offer</h2>
            <p className="mx-auto text-lg font-bold mt-4 text-slate-200">
              We are committed to giving students access to amazing, quality and
              cutting-edge tech skills that will help secure their place in the
              future, regardless of their career paths.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {icn.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 mx-4 mb-8 text-center transition rounded-lg shadow-xl bg-slate-700 hover:border-white hover:shadow-white"
                style={{ maxWidth: "300px" }} // Optional: Set max-width for better responsiveness
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 mb-4"
                />
                <h3 className="mb-2 text-xl font-bold">{item.name}</h3>
                <p className="text-slate-200">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechSkill;
