import React from 'react';
import Link from 'next/link';


const SecondFeature = (props) => {
  return (
    // container
    <div className='relative'> 
    {/* twocolumn */}
      <div classNameName='flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center'>
        {/* Column*/}
        <div className='w-full max-w-md mx-auto md:max-w-none md:mx-0'>
          {/* imageColumn */}
          <div className='md:w-6/12 flex-shrink-0 relative'>
            {/* imageLink */}
          <img src='https://media-exp1.licdn.com/dms/image/C4D03AQE99sLMyKpDqA/profile-displayphoto-shrink_800_800/0/1517072415081?e=1652918400&v=beta&t=XG12PkGgbdZaqCIm6DrPRWECRAZyg4C4oACqk-nfusE' alt="MetricQLvisualizer" width="500" height="500" classNameName="w-5000 h-5000 bg-contain bg-center rounded"></img>
          </div>
        </div>
          {/* TextColumn */}
          <div className='md:w-6/12 mt-16 md:mt-0'>
            {/* TextonLeft */}
            <div className='md:mr-12 lg:mr-16 md:order-first'>
              {/* TextContent */}
              <div className='lg:py-8 text-center md:text-left'>
                {/* Subheading */}
                <div className='font-bold text-primary-500 text-center md:text-left'> MetricQL</div>
                  {/* heading */}
                <div className='text-4xl sm:text-5xl font-black tracking-wide text-center mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight'> Visualize your MetriQL stuff here!</div>
                {/* Description */}
                 <div className='mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100'> MetricQL is so cool and amazing because we all worked on it and copied and pasted hehehehe</div>
                 {/* primarybutton */}
                 <button className='px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0 rounded-full'>Button</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}



export default SecondFeature;