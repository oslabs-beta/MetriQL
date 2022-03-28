import Link from 'next/link'
import React, {useContext, useEffect} from 'react';
import { StatusContext } from '../context/global-context';

const Header = () => {

  const { statusState, verifySession } = useContext(StatusContext)

  useEffect(()=> {
    verifySession
  }, [])
  
  
  //conditionally render log in button based on state 
  return (
    (statusState.isLoggedIn ? 
    <nav className="bg-dark3 border-dark1 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap space-x-10 items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-purple">MetricQL</span>
        </a>
          {/* <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="/" className="mt-4 lg:mt-0 transition duration-300 font-medium pb-1 mr-12 text-white border-gray hocus:border-gray">Back to Home</a>
            </li>
          </ul> */}
      
      </div>

       <div className="container flex flex-col space-x-10 items-left mx-auto">
          <a onClick={() => location.href='http://localhost:3001/logout'} href='#' className="flex items-right">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-purple">Log Out</span>
          </a>
       </div>  
    </nav> 
  : 
    <nav>
      <div className="container flex flex-wrap space-x-10 items-center mx-auto">
      <a href="/" className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-purple">MetricQL</span>
      </a>
      </div>
    </nav>
    
    )
  )
}
export default Header;