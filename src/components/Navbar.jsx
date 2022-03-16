import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [search, setSearch] = useState("")
  return (
    <div className="bg-gray-100 shadow-md justify-between items-center flex h-12 fixed top-0 w-full md:w-4/5">
        <div className='text-2xl'></div>
        <div className='w-full h-8 bg-white rounded-xl mx-6 ml-16 md:ml-10 px-4 flex items-center focus-within:shadow-md'>
          <input type="text" placeholder='Search' className='w-full focus:outline-none' onChange={(e) => {setSearch(e.target.value)}}/>
        </div>
        <div className='flex items-center mr-2'>
          <NavLink to="/detailuser">
            <img src="#" className='rounded-full bg-white px-3 py-3 w-full'  /> 
          </NavLink>
        </div>
        {console.log(search)}
    </div>
  )
}

export default Navbar