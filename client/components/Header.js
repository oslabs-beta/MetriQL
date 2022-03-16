import Link from 'next/link'

const Header = () => {
  return (
    <div className = ' h-20 inset-x-0 top-0 bg-header'>
      <Link  href='/'> Go Home</Link>
    </div>
  )
}

export default Header;