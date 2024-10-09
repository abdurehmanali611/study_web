import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <motion.div 
      initial = {{
        scale: 0,
        rotate: '0deg'
      }}
      animate = {{
        scale: 1,
        rotate: '360deg'
      }}
      transition={{
        duration: 5,
        ease: 'easeIn'
      }}
      className="flex justify-between h-screen items-center md:justify-center md:flex-col md:gap-12">
          <div className="flex flex-col gap-7 md:text-center sm:text-center">
            <h3 className="text-2xl font-serif font-semibold capitalize">Study Pal</h3>
            <h5 className="text-xl font-mono capitalize">You can take a position in a Tech</h5>
            <p className="text-lg font-mono">Lorem ipsum dolor sit amet consectetur 
            <br />adipisicing elit. Culpa, error aliquam debitis
            </p>
            <button
            className="bg-green-400 w-fit p-2 rounded-xl text-lg font-serif flex self-center text-black hover:bg-white hover:text-green-900 md:hidden"
            >
              Learn More
            </button>
          </div>
          <div className="sm:hidden">
              <img 
              src="/online2.webp" 
              alt="Online Course"
              className="rounded-xl w-80" 
              />
          </div>
      </motion.div>
      <motion.div
      initial = {{
        scaleY: 0,
      }}
      animate = {{
        scaleY: 1,
      }}
      transition={{
        duration: 5,
        ease: 'easeIn'
      }}
      className="flex justify-between p-4 bg-gradient-to-l from-white to-slate-400 rounded-xl md:flex-col md:gap-10 md:bg-gradient-to-b md:from-slate-400 md:to-white sm:bg-gradient-to-r sm:from-slate-400 sm:to-slate-400"
      >
        <div className="flex flex-col gap-5">
          <h4 className="font-serif text-xl font-semibold">About Us</h4>
        <p className="font-mono text-red-600 sm:font-sans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          <br />Alias exercitationem beatae veniam consequatur magni 
          <br />maxime reprehenderit ab error laudantium nemo sint 
          <br />nulla est praesentium nam, delectus, ut vero laboriosam facilis.
        </p>
        <p className="font-mono text-cyan-700 sm:hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          <br />Alias exercitationem beatae veniam consequatur magni 
          <br />maxime reprehenderit ab error laudantium nemo sint 
          <br />nulla est praesentium nam, delectus, ut vero laboriosam facilis.
        </p>
        </div>
        <img 
        src="/train.png" 
        alt="Training"
        className="rounded-xl sm:hidden"
        />
      </motion.div>
      <hr className="my-6"/>
      <div 
      className="my-7 flex flex-col gap-6"
      >
            <h4 className="font-serif text-xl">Services</h4>
            <div className="flex gap-5 items-center">
              <div className="flex">
              <div className="h-24 w-2 bg-slate-400 rounded-3xl"/>
              <div className="z-20 absolute bg-red-800 h-6 w-2 my-5"/>
              </div>
              <p className="font-mono text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                <br className="sm:hidden"/>Facilis, perspiciatis quas atque cupiditate!
              </p>
            </div>
      </div>
      <hr className="my-6"/>
      <div 
      className="flex justify-between gap-10 md:flex-col md:items-center">
        <div className="flex flex-col gap-6 w-[630px]">
          <h4 className="font-serif text-xl text-center">Mathematics and Statistics</h4>
          <p className="font-mono text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          <br className="sm:hidden"/>Alias exercitationem beatae veniam consequatur magni 
          <br className="sm:hidden"/>maxime reprehenderit ab error laudantium nemo sint 
          <br className="sm:hidden"/>nulla est praesentium nam, delectus, ut vero laboriosam facilis.
          </p>
          <p className="font-mono text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          <br className="sm:hidden"/>Alias exercitationem beatae veniam consequatur magni
          </p>
          <Link 
          to='/course'
          className="text-red-700 text-lg text-end hover:text-blue-500 md:hidden">See More</Link>
        </div>
        <img 
        src="/maths.jfif" 
        alt="web and Mobile app development" 
        className="rounded-xl w-[500px] h-80 sm:hidden"
        />
        <Link 
          to='/course'
          className="text-red-700 text-lg text-end hover:text-blue-500 hidden md:block">See More</Link>
      </div>
      <hr className="my-6"/>
      <div className="flex justify-between gap-10 md:flex-col md:items-center">
      <img 
        src="/machine.png" 
        alt="Machine Learning" 
        className="rounded-xl w-[500px] sm:hidden h-80"
        />
        <div className="flex flex-col gap-6 w-[630px]">
          <h4 className="font-serif text-xl text-center">Tech related and Programming</h4>
          <p className="font-mono text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          <br className="sm:hidden"/>Alias exercitationem beatae veniam consequatur magni 
          <br className="sm:hidden"/>maxime reprehenderit ab error laudantium nemo sint 
          <br className="sm:hidden"/>nulla est praesentium nam, delectus, ut vero laboriosam facilis.
          </p>
          <p className="font-mono text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          <br className="sm:hidden"/>Alias exercitationem beatae veniam consequatur magni
          </p>
          <Link 
          to='/course'
          className="text-red-700 text-lg text-end hover:text-blue-500">See More</Link>
        </div>
      </div>
      <hr className="my-6"/>
      <div className="flex justify-between gap-10 md:flex-col md:items-center">
        <div className="flex flex-col gap-6 w-[630px]">
          <h4 className="font-serif text-xl text-center">Social Science</h4>
          <p className="font-mono text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          <br className="sm:hidden"/>Alias exercitationem beatae veniam consequatur magni 
          <br className="sm:hidden"/>maxime reprehenderit ab error laudantium nemo sint 
          <br className="sm:hidden"/>nulla est praesentium nam, delectus, ut vero laboriosam facilis.
          </p>
          <p className="font-mono text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          <br className="sm:hidden"/>Alias exercitationem beatae veniam consequatur magni
          </p>
          <Link 
          to='/course'
          className="text-red-700 text-lg text-end hover:text-blue-500 block md:hidden">See More</Link>
        </div>
        <img 
        src="/social.png" 
        alt="Video Editing" 
        className="rounded-xl w-[500px] sm:hidden h-80"
        />
        <Link 
          to='/course'
          className="text-red-700 text-lg text-end hover:text-blue-500 hidden md:block">See More</Link>
      </div>
      <hr className="my-6"/>
      <div className="flex justify-between gap-10 md:flex-col md:items-center">
      <img 
        src="/soft.png" 
        alt="Graphic Design" 
        className="rounded-xl w-[500px] sm:hidden h-80"
        />
        <div className="flex flex-col gap-6 w-[630px]">
          <h4 className="font-serif text-xl text-center">Soft Skills</h4>
          <p className="font-mono text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          <br className="sm:hidden"/>Alias exercitationem beatae veniam consequatur magni 
          <br className="sm:hidden"/>maxime reprehenderit ab error laudantium nemo sint 
          <br className="sm:hidden"/>nulla est praesentium nam, delectus, ut vero laboriosam facilis.
          </p>
          <p className="font-mono text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          <br className="sm:hidden"/>Alias exercitationem beatae veniam consequatur magni
          </p>
          <Link 
          to='/course'
          className="text-red-700 text-lg text-end hover:text-blue-500">See More</Link>
        </div>
      </div>
    </div>
  )
}

export default Home