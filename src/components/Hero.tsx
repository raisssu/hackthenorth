import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className='bg-customDarkGreen p-10 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <h1 className='items-center text-customBeige font-bold text-5xl font-mono'>
          The Best AI Resume Reader
        </h1>
        <p className='my-4 text-xl text-customBeige italic'>
          Simply enter your resume and we will do the recommending.
        </p>
      </div>
    </section>
  );
}

export default Hero;
