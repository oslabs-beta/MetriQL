import Link from 'next/link'

const Header = () => {
  return (
    <nav className="bg-navBarGrey border-dark1 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
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
    </nav>
  )
}

export default Header;