import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className='bg-customBeige p-10 pb-3'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <h1 className='items-center text-customGreen font-bold text-5xl font-mono'>
          The Best AI Resume Reader
        </h1>
        <p className='my-4 text-xl text-customGreen italic'>
          Simply enter your resume and we will do the recommending.
        </p>
      </div>
    </section>
  );
}

export default Hero;
