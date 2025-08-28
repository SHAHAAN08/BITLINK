import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 text-white px-3 flex justify-between items-center'>
        <div className="logo font-bold text-lg">
            BITLINKS
        </div>
        <ul className='flex justify-center items-center gap-4'>
            <li className='flex gap-3'>
                <Link href="/"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py1 font-bold cursor-pointer'>Home</button></Link>
                <Link href="/Shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py1 font-bold cursor-pointer'>Try Now</button></Link>
                <Link href="https://github.com/SHAHAAN08"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py1 font-bold cursor-pointer'>Github</button></Link>
            </li>

        </ul>
    </nav>
  )
}

export default Navbar
