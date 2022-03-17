import Link from 'next/link'

const Header = () => {
  return (
    <nav class="bg-dark3 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap space-x-10 items-center mx-auto">
        <a href="/" class="flex items-center">
        
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-purple">MetricQL</span>
        </a>
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="/" class="mt-4 lg:mt-0 transition duration-300 font-medium pb-1 mr-12 text-white border-gray hocus:border-gray">Back to Home</a>
            </li>
          </ul>
      
      </div>
    </nav>
  )
}

export default Header;