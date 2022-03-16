import React from 'react';
import Link from 'next/link';
//import image/gif app 

const AboutApp = (props) => {
    return (
        <div id="Container" className="relative">
            <div id="TwoColumn" className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
                {/* <div id="image" classNameName="md:w-6/12 flex-shrink-0 relative">
                    <Image></Image>
                </div> */}
                <div id="TextColumn" className="w-full max-w-md mx-auto md:max-w-none md:mx-0">
                    <div id= "TContent" className="md:w-6/12 mt-16 md:mt-0 ">
                        <div id="TContentLeft" className="md:mr-12 lg:mr-16 md:order-first">
                            <div id="subheading" className="text-center md:text-left">About MetricQL</div>
                            <div id="heading" className="mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight">Transition to GraphQL Seamlesslessly</div>
                            <p id="Description" className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100">We are GraphQL and we do great things!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
     
}

export default AboutApp;