import React from 'react';
import Link from 'next/link'



const Features = (props) => {
    return (
        <div>
            <div class="relative max-w-screen-xl mx-auto py-20 lg:py-24">
                <div calss="flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24">
                    <div class="container flex justify-center mx-auto pt-12">
                        <div>
                            <h5 class="font-bold text-purple flex justify-center">Features</h5>
                            <h1 class="text-4xl sm:text-5xl font-black text-blue tracking-wide text-center">GraphQL Tools</h1>
                            <p class="mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary max-w-xl flex justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div class="mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto">
                        <div class ='lg:w-1/3 max-w-xs'>
                        <a class="flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105">
                            <span class="mt-4 font-bold text-xl text-blue leading-none">Feature</span>
                            <p className="mt-4 text-sm font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </a>
                        </div>
                        <div class ='lg:w-1/3 max-w-xs'>
                        <a class="flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105">
                            <span class="mt-4 font-bold text-xl text-blue leading-none">Feature</span>
                            <p className="mt-4 text-sm font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </a>
                        </div>
                        <div class ='lg:w-1/3 max-w-xs'>
                        <a class="flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105">
                            <span class="mt-4 font-bold text-xl text-blue leading-none">Feature</span>
                            <p className="mt-4 text-sm font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features;