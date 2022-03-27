import React, { useContext, useState, useEffect } from 'react';
import { StatusContext } from '../context/global-context';
// import GlobalState from '../context/GlobalState';
// import { LOGIN, LOGOUT } from '../context/global-actions';
// import Link from 'next/link'

function Nav( {openModal} ) {

    const { status, verifySession } = useContext(StatusContext);  
    
    useEffect(() => {
        verifySession()
    }, [])

    const openLoginModal = () => {
        return openModal()
    }

    return (
        
        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 sticky top-0 z-50" >
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" class="flex items-center">
                    <img src="/metricql.png" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-purple">MetricQL</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/main?#" className="mt-4 lg:mt-0 transition duration-300 font-medium pb-1 mr-12 text-gray border-gray hocus:border-gray">Tool</a>
                        </li>
                        <li>
                            <a href="https://github.com/oslabs-beta/MetriQL" className="mt-4 lg:mt-0 transition duration-300 font-medium pb-1 mr-12 text-gray border-gray hocus:border-gray">Download</a>
                        </li>
                        <li>
                            <a href="#" className="mt-4 lg:mt-0 transition duration-300 font-medium pb-1 mr-12 text-gray-700 border-gray hocus:text-gary">Team</a>
                        </li>
                        <li >
                            {status ? //login status persists, but not usernames
                             <a onClick={() => location.href='http://localhost:3001/logout'} href='#' class="mt-4 lg:mt-0 transition duration-300 font-medium pb-1 mr-12 text-gray-700 border-gray hocus:text-gary">Log Out</a> : <a onClick={openLoginModal} href="#" class="mt-4 lg:mt-0 transition duration-300 font-medium pb-1 mr-12 text-gray-700 border-gray hocus:text-gary">Log In</a>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Nav;