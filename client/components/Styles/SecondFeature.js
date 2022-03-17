import React from 'react';
import Link from 'next/link';


const SecondFeature = (props) => {
  return (
    // container
    <div class='relative'> 
    {/* twocolumn */}
      <div class='flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center'>
        {/* Column*/}
        <div class='w-full max-w-md mx-auto md:max-w-none md:mx-0'>
          {/* imageColumn */}
          <div class='md:w-9/12 flex-shrink-0 relative'>
            {/* imageLink */}
          <img src='/demophoto.png' alt="MetricQLvisualizer" class="w-5000 h-5000 bg-contain bg-center rounded"></img>
          </div>
        </div>
          {/* TextColumn */}
          <div class='md:w-9/12 mt-16 md:mt-0'>
            {/* TextonLeft */}
            <div class='md:mr-12 lg:mr-16 md:order-first'>
              {/* TextContent */}
              <div class='lg:py-8 text-center md:text-left'>
                {/* Subheading */}
                <div class='font-bold text-purple text-center md:text-left'> MetricQL</div>
                  {/* heading */}
                <div class='font-black tracking-wide text-center mt-4 text-left text-3xl sm:text-4xl lg:text-5xl text-blue text-center md:text-left leading-tight'> Visualize your MetricQL stuff here!</div>
                {/* Description */}
                 <div class='mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary'> MetricQL is so cool and amazing because we all worked on it and copied and pasted hehehehe</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}



export default SecondFeature;