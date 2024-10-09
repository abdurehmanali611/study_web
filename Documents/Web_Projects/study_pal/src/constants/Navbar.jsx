import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"

const Navbar = () => {

  const [menus, setMenus] = useState(false)

  return (
    <div>
      <div className="flex justify-between sm:flex-row-reverse">
        <div className="w-10 h-10 bg-green-600 rounded-[50%] md:hidden block sm:hidden"/>
          {!menus ? (
            <ul className="list-none flex gap-5 sm:flex-row-reverse sm:items-center">
            <motion.li 
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.5,
                ease: 'easeInOut'
              }
            }}
            className="text-[22px] text-violet-500 hover:text-blue-400 font-serif font-bold hover:shadow-lg hover:shadow-red-300 block sm:hidden">
              <Link 
              to='/'
              className="focus:text-red-500">Home</Link>
            </motion.li>
            <li className="hidden sm:block">
              <Link
              onClick={() => setMenus(!menus)}
              >
              <img 
              src="/menu.png" 
              alt="Menu" 
              className="w-20 h-16"
              />
              </Link>
            </li>
            <motion.li 
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.5,
                ease: 'easeInOut'
              }
            }}
            className="text-[22px] text-violet-500 hover:text-blue-400 font-serif font-bold hover:shadow-lg hover:shadow-red-300 block sm:hidden">
              <Link 
              to='/about'
              className="focus:text-red-500">About Us</Link>
            </motion.li>
            <motion.li 
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.5,
                ease: 'easeInOut'
              }
            }}
            className="text-[22px] text-violet-500 hover:text-blue-400 font-serif font-bold hover:shadow-lg hover:shadow-red-300 block sm:hidden">
              <Link 
              to='/course'
              className="focus:text-red-500">Courses</Link>
            </motion.li>
            <motion.li 
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.5,
                ease: 'easeInOut'
              }
            }}
            className="text-[22px] text-violet-500 hover:text-blue-400 font-serif font-bold hover:shadow-lg hover:shadow-red-300 block sm:hidden">
              <Link 
              to='/history'
              className="focus:text-red-500">History</Link>
            </motion.li>
            <motion.li 
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.5,
                ease: 'easeInOut'
              }
            }}
            className="text-[22px] text-violet-500 hover:text-blue-400 font-serif font-bold hover:shadow-lg hover:shadow-red-300 sm:hidden block">
              <Link 
              to='/contact'
              className="focus:text-red-500">Contact</Link>
            </motion.li>
          </ul>
          ) : (
            <ul className="bg-slate-300 w-56 p-2 flex flex-col gap-5 rounded-xl sm:z-10 sm:absolute items-center">
              <li className="hidden sm:flex sm:gap-24 sm:items-start sm:flex-row-reverse">
                <Link
                onClick={() => setMenus(!menus)}
                >
                  <img 
                  src="/close.jpg" 
                  alt="Close" 
                  className="w-16 h-16 rounded-3xl"
                  />
                </Link>
                <Link 
                  to='/login'
                  onClick={() => setMenus(!menus)}
                   className="flex items-center flex-col">
                    <img 
                    src="/login.jpg" 
                    alt="Login Image"
                     className="w-10 h-10 rounded-lg"
                    />
                   <p className="font-serif text-lg">Login</p>
               </Link>
              </li>
              <motion.li 
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.5,
                ease: 'easeInOut'
              }
            }}
            className="text-[22px] text-violet-500 hover:text-blue-400 font-serif font-bold hover:shadow-lg hover:shadow-red-300">
              <Link 
              to='/'
              onClick={() => setMenus(!menus)}
              className="focus:text-red-500">Home</Link>
            </motion.li>
            <motion.li 
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.5,
                ease: 'easeInOut'
              }
            }}
            className="text-[22px] text-violet-500 hover:text-blue-400 font-serif font-bold hover:shadow-lg hover:shadow-red-300">
              <Link 
              to='/about'
              onClick={() => setMenus(!menus)}
              className="focus:text-red-500">About Us</Link>
            </motion.li>
            <motion.li 
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.5,
                ease: 'easeInOut'
              }
            }}
            className="text-[22px] text-violet-500 hover:text-blue-400 font-serif font-bold hover:shadow-lg hover:shadow-red-300">
              <Link 
              to='/course'
              onClick={() => setMenus(!menus)}
              className="focus:text-red-500">Courses</Link>
            </motion.li>
            <motion.li 
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.5,
                ease: 'easeInOut'
              }
            }}
            className="text-[22px] text-violet-500 hover:text-blue-400 font-serif font-bold hover:shadow-lg hover:shadow-red-300">
              <Link 
              to='/history'
              onClick={() => setMenus(!menus)}
              className="focus:text-red-500">History</Link>
            </motion.li>
            <motion.li 
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.5,
                ease: 'easeInOut'
              }
            }}
            className="text-[22px] text-violet-500 hover:text-blue-400 font-serif font-bold hover:shadow-lg hover:shadow-red-300">
              <Link 
              to='/contact'
              onClick={() => setMenus(!menus)}
              className="focus:text-red-500">Contact</Link>
            </motion.li>
            </ul>
          )}
          <Link 
          to='/login'
          className="flex items-center sm:hidden">
             <img 
             src="/login.jpg" 
             alt="Login Image"
             className="w-10 h-10 rounded-lg"
             />
             <p className="font-serif text-lg">Login</p>
          </Link>
      </div>
    </div>
  )
}

export default Navbar