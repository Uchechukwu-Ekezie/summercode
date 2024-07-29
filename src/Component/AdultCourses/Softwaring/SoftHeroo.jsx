import React from 'react'
import { Link } from 'react-router-dom';

function SoftHeroo() {
    return(
<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Become a Software Engineering Expert
          </h2>
  
          <p className="hidden text-gray-500 md:mt-4 md:block">
            Learn how to develop high-quality software applications. Our course covers essential software engineering practices and principles, providing you with the skills needed to succeed in the software industry.
          </p>
  
          <div className="mt-4 md:mt-8">
            <Link
              href="#"
              className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
  
      <img
        alt="Software Engineering"
        src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
}


export default SoftHeroo