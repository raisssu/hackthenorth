import React from 'react'

function Welcome() {
    return (
        <section className='bg-customDarkGreen p-16'>
            <h2 className='text-center font-bold italic size text-4xl text-customBeige pb-2'>Misson</h2>
            <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center
             text-customBeige '>
                <p>
                <i>Hack the Resume</i> was made to help people around the world <i> hack into the workforce </i>. 
                By scanning your resume, we are able to give you suggestions to <strong>enhance</strong> your application 
                chances, giving you the <strong>reassurance</strong> and push to commit to any application.
                </p>
            </div>
        </section>
    )
}

export default Welcome