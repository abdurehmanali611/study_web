import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className="p-3 rounded-b-2xl bg-gradient-to-r from-blue-400 to-cyan-200 flex flex-col gap-8">
      <div className="flex justify-between sm:flex sm:justify-center">
          <h3 className="uppercase font-serif text-xl font-semibold block sm:hidden">Get in Touch with us</h3>
        <div className="flex gap-5 sm:self-center">
        <Link>
        <motion.img 
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.5,
            ease: 'easeInOut'
          }
        }}
        src="/email.png" 
        alt="Email" 
        className="w-9 h-9 rounded-2xl"
        />
        </Link>
        <Link>
        <motion.img
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.5,
            ease: 'easeInOut'
          }
        }} 
        src="/facebook.png" 
        alt="Facebook" 
        className="w-9 h-9 rounded-lg"
        />
        </Link>
        <Link>
        <motion.img 
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.5,
            ease: 'easeInOut'
          }
        }}
        src="/imo.png" 
        alt="Imo" 
        className="w-9 h-9 rounded-2xl"
        />
        </Link>
        <Link>
        <motion.img 
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.5,
            ease: 'easeInOut'
          }
        }}
        src="/telegram.png" 
        alt="Telegram" 
        className="w-9 h-9 rounded-lg"
        />
        </Link>
        <Link>
        <motion.img
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.5,
            ease: 'easeInOut'
          }
        }}
        src="/whatsapp.png" 
        alt="Whatsapp" 
        className="w-9 h-9 rounded-2xl"
        />
        </Link>
        </div>
      </div>
      <div className="flex justify-between sm:flex-col-reverse">
        <ul className="list-none flex flex-col gap-5 sm:hidden">
         <motion.li 
         whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.5,
            ease: 'easeInOut'
          }
        }}
         className="text-[20px] text-red-600 hover:text-green-400 font-serif font-bold hover:shadow-lg">
            <Link to='/'>Home</Link>
          </motion.li>
          <motion.li 
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.5,
              ease: 'easeInOut'
            }
          }}
          className="text-[20px] text-red-600 hover:text-green-400 font-serif font-bold hover:shadow-lg">
            <Link to='/about'>About US</Link>
          </motion.li>
          <motion.li 
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.5,
              ease: 'easeInOut'
            }
          }}
          className="text-[20px] text-red-600 hover:text-green-400 font-serif font-bold hover:shadow-lg">
            <Link to='/course'>Courses</Link>
          </motion.li>
          <motion.li 
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.5,
              ease: 'easeInOut'
            }
          }}
          className="text-[20px] text-red-600 hover:text-green-400 font-serif font-bold hover:shadow-lg">
            <Link to='/history'>History</Link>
          </motion.li>
          <motion.li 
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.5,
              ease: 'easeInOut'
            }
          }}
          className="text-[20px] text-red-600 hover:text-green-400 font-serif font-bold hover:shadow-lg">
            <Link to='/contact'>Contact</Link>
          </motion.li>
        </ul>
        <form className="flex flex-col gap-5 justify-center">
            <label className="flex flex-col gap-5 font-serif text-xl font-semibold">
              Register to our Newsletter
              <input 
              type="email" 
              name="Email" 
              required
              className="bg-red-200/40 px-3 rounded-lg w-80 h-12"
              placeholder="Enter Your Email"
              />
            </label>
            <input 
            type="submit" 
            value="Submit" 
            className="bg-green-400 w-fit px-3 py-2 self-end rounded-xl text-red-700 cursor-pointer font-serif text-lg font-semibold"
            />
        </form>
      </div>
    </div>
  )
}

export default Footer