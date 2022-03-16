import React from 'react';
import Link from 'next/link'



const Features = (props) => {
    return (
        <div>
            <div class="relative">
                <div calss="flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24">
                    <div class="container flex justify-center mx-auto pt-12">
                        <div>
                            <h5 class="font-bold text-black flex justify-center">Features</h5>
                            <h1 class="text-4xl sm:text-5xl font-black tracking-wide text-black text-center">GraphQL Tools</h1>
                            <p class="mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl flex justify-center">description</p>
                        </div>
                    </div>
                    <div class="mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto">
                        <div class="mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto">
                            <a class="flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105">
                                <span class="mt-4 font-bold text-xl leading-none">Schema</span>
                                <p className="mt-4 text-sm font-medium text-secondary-300">information</p>
                            </a>
                            <a class="flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105">
                                <span class="mt-4 font-bold text-xl leading-none">Resolve Time Metrics</span>
                                <p className="mt-4 text-sm font-medium text-secondary-300">information</p>
                            </a>
                            <a class="flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105">
                                <span class="mt-4 font-bold text-xl leading-none">Something else</span>
                                <p className="mt-4 text-sm font-medium text-secondary-300">information</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;