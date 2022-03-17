import React from 'react';
import Link from 'next/link';


const SecondFeature = (props) => {
  return (
    // container
    <div class='relative'>
      <div class='flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center'>
        <div class='w-full max-w-md mx-auto md:max-w-none md:mx-0'>
          <div class='md:w-9/12 flex-shrink-0 relative'>
            <img src='/demophoto.png' alt="MetricQLvisualizer" class="w-5000 h-5000 bg-contain bg-center rounded"></img>
          </div>
        </div>
        <div class='md:w-9/12 mt-16 md:mt-0'>
          <div class='md:mr-12 lg:mr-16 md:order-first'>
            <div class='lg:py-8 text-center md:text-left'>
              <div class='font-bold text-purple text-center md:text-left'>Feature 1</div>
              <div class='font-black tracking-wide text-center mt-4 text-left text-3xl sm:text-4xl lg:text-5xl text-blue text-center md:text-left leading-tight'> Visualize your MetricQL stuff here!</div>
              <div class='mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default SecondFeature;