import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">

        <div className='flex flex-col justify-center items-center w-full h-full'>

            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#d42d2d]'>
                        About
                    </p>
                </div>
                <div></div>

            </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>

                    <div className='sm:texxt-right text-4xl font-bold'>
                        <p>Hi. I'm Faraz, nice to meet you. Take a look around!</p>
                    </div>

                    <div>
                        <p>
                            I am passionate about creating software that improves 
                            the lives of those around me. I specialize in desinging and 
                            developing unique user experiences while solving problems. I am 
                            passionate about programming, which fuels my drive to develop amazing 
                            applications.
                        </p>
                    </div>

                </div>

        </div>

    </div>
  )
}

export default About