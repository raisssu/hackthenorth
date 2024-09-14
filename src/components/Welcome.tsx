import React from 'react';

function Welcome() {
  return (
    <section className='bg-customLightGreen p-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Container for three boxes, aligned to the top */}
        <div className='flex flex-col md:flex-row justify-center items-start gap-6'>
          {/* Left Box: About Us */}
          <div className='flex-1 bg-customBeige text-customDarkGreen rounded-lg shadow-2xl p-6 min-h-[350px]'>
            <h2 className='text-center font-bold text-3xl text-customDarkGreen mb-4'>
              About Us
            </h2>
            <p>
              We are a passionate team of developers and designers focused on creating solutions that help people succeed in their job search.
            </p>
          </div>

          {/* Middle Box: Mission */}
          <div className='flex-1 bg-customBeige text-customDarkGreen rounded-lg shadow-2xl p-6 min-h-[350px]'>
            <h2 className='text-center font-bold text-3xl text-customDarkGreen mb-4'>
              Mission
            </h2>
            <p className='text-center'>
              <i>Hack the Resume</i> was made to help people around the world
              <i>hack into the workforce</i>. By scanning your resume, we are able to give you suggestions to
              <strong> enhance</strong> your application chances, giving you the
              <strong> reassurance</strong> and push to commit to any application.
            </p>
          </div>

          {/* Right Box: Why We Made This Project */}
          <div className='flex-1 bg-customBeige text-customDarkGreen rounded-lg shadow-2xl p-6 min-h-[350px]'>
            <h2 className='text-center font-bold text-3xl text-customDarkGreen mb-4'>
              Why We Made This Project
            </h2>
            <p>
              We created this project to bridge the gap between job seekers and employers by offering tools that improve the quality of resumes, making the job application process easier and more effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
