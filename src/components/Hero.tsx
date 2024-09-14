import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className='bg-customMediumGreen p-10 pb-3'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <h1 className='text-customBeige font-bold text-center text-5xl'>
          The Best AI Resume Reader
        </h1>
        <p className='my-4 text-customBeige italic text-2sm'>
          Simply enter your resume and we will do the recommending.
        </p>
      </div>
    </section>
  );
}

export default Hero;
