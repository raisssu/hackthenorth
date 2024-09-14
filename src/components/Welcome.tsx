import React from 'react';

function Welcome() {
  return (
    <section className='bg-customOtherGreen p-10'>
      <h2 className='text-center font-bold italic text-4xl text-customBeige pb-2'>
        Mission
      </h2>
      <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center'>
        {/* Bubble effect for the text content with shadow */}
        <div className='bg-customBeige text-customDarkGreen rounded-lg shadow-2xl shadiw-lg p-6'>
          <p>
            <i>Hack the Resume</i> was made to help people around the world
            <i> hack into the workforce</i>. By scanning your resume, we are able to give you suggestions to
            <strong> enhance</strong> your application chances, giving you the
            <strong> reassurance</strong> and push to commit to any application.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
