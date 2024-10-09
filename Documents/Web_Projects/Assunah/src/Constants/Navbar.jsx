import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

  const [middle, setMiddle] = useState(false)

  return (
    <div className="px-3 py-2">
    <div className="flex justify-between mx-2">
      <div 
      className="flex gap-5 items-center">
      <img 
      src="/AICP.jfif"
      className="w-28 h-28 rounded-xl"
      alt="Assunah Logo"
      />
      <h3 className="text-[30px] text-green-700 md:hidden sm:hidden w-48">AICP</h3>
      </div>
        {middle ? (
          <div>
            <div>
            <ul className="list-none bg-slate-400 w-48 p-4 flex flex-col gap-3 rounded-xl h-72 justify-evenly md:z-20 md:absolute md:right-2 md:top-2 sm:z-20 sm:absolute sm:right-2 sm:top-2">
              <li className="self-end">
                <Link
                onClick={() => setMiddle(!middle)}
                >
                  <img 
                  src="/close.jpg" 
                  alt="Close" 
                  className="w-12 rounded-2xl h-10"
                  />
                </Link>
              </li>
              <li className="bg-gray-100 w-28 flex justify-center rounded-xl h-10 items-center hover:bg-white">
                <Link
                className="text-green-700 hover:text-blue-400 text-[20px]"
                to='/about'
                >
                  About
                </Link>
              </li>
              <li className="bg-gray-100 w-28 flex justify-center rounded-xl h-10 items-center hover:bg-white">
                <Link
                className="text-green-700 hover:text-blue-400 text-[20px]"
                to='/service'
                >
                  Services
                </Link>
              </li>
              <li className="bg-gray-100 w-28 flex justify-center rounded-xl h-10 items-center hover:bg-white">
                <Link
                className="text-green-700 hover:text-blue-400 text-[20px]"
                to='/contact'
                >
                  Contact
                </Link>
              </li>
            </ul>
            </div>
          </div>
        ): (
          <ul className=" list-none flex gap-8 items-center sticky">
        <li className="md:hidden sm:hidden">
            <Link
            to='/about' 
            className="text-green-700 hover:text-blue-400 text-[20px]">About US</Link>
          </li>
          <li className="md:hidden sm:hidden">
            <Link 
            to='/service'
            className="text-green-700 hover:text-blue-400 text-[20px]">Services</Link>
          </li>
          <li className="md:hidden sm:hidden">
            <Link 
            to='/contact'
            className="text-green-700 hover:text-blue-400 text-[20px]">Contacts</Link>
          </li>
          <li className="hidden md:block sm:block">
            <Link
            onClick={() => setMiddle(!middle)}
            >
             <img 
             src="/assunahmenu.png" 
             alt="Assunah Menu"
             className="bg-black w-12 h-12 rounded-xl" 
             />
            </Link>
          </li>
        </ul>
        )}
    </div>
    </div>
  )
}

export default Navbar