import { Link } from "react-router-dom"

const Services = () => {
  
  return (
    <div className="mx-16 my-10 flex flex-col gap-20">
        <div className="h-56 flex flex-col justify-evenly md:h-72 sm:h-80">
            <h2 className="text-[23px] font-serif font-semibold">Our Services</h2>
            <header className="text-[20px] w-96 font-serif font-extrabold">We Offer a Range Of Services to Meet Your Needs</header>
            <p className="text-[19px] font-mono md:font-sans md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br />Eaque, quo? Cumque et minus ab voluptates, qui ipsam mollitia
            </p>
        </div>
        <hr />
        <div className="flex justify-between gap-8 md:flex-col">
          <div className="flex flex-col justify-evenly w-[1000px] md:w-[590px] md:gap-5 sm:gap-7">
            <h3 className="text-[23px] font-serif font-semibold">Student Registration</h3>
            <p className="text-[19px] font-mono">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Minima aliquid consequuntur possimus, odio quae error temporibus 
              repudiandae, sequi sint, pariatur fugit! Laborum enim et amet non 
              quasi incidunt esse illum.
            </p>
            <p className="text-[19px] font-mono">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Minima aliquid consequuntur possimus, odio quae error temporibus 
              repudiandae, sequi sint, pariatur fugit! Laborum enim et amet non 
              quasi incidunt esse illum.
            </p>
            <Link
            to='/qirat' 
            className="text-red-400 text-xl font-serif bg-slate-400/20 w-fit p-2 rounded-xl self-end hover:bg-white hover:text-blue-400">Register</Link>
          </div>
          <div className="sm:hidden">
            <img 
            src="recite_child.jpg" 
            alt="Qirat center"
            className="rounded-3xl h-[400px] w-[1000px]" 
            />
          </div>
        </div>
        <hr />
        <div className="flex flex-row-reverse justify-between gap-8 md:flex-col">
        <div className="flex flex-col justify-evenly w-[1000px] md:w-[590px] md:gap-7 sm:gap-7">
            <h3 className="text-[23px] font-serif font-semibold">Teaching</h3>
            <p className="text-[19px] font-mono">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Minima aliquid consequuntur possimus, odio quae error temporibus 
              repudiandae, sequi sint, pariatur fugit! Laborum enim et amet non 
              quasi incidunt esse illum.
            </p>
            <p className="text-[19px] font-mono">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Minima aliquid consequuntur possimus, odio quae error temporibus 
              repudiandae, sequi sint, pariatur fugit! Laborum enim et amet non 
              quasi incidunt esse illum.
            </p>
          </div>
          <div className="sm:hidden">
            <img 
            src="recite_kitab.avif" 
            alt="Qirat center"
            className="rounded-3xl h-[500px] w-[1000px]" 
            />
          </div>
        </div>
        <hr />
        <div className="flex justify-between gap-8 md:flex-col">
          <div className="flex flex-col justify-evenly w-[1000px] md:w-[550px] md:gap-7 sm:gap-7">
            <h3 className="text-[23px] font-serif font-semibold">Classrooms</h3>
            <p className="text-[19px] font-mono">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Minima aliquid consequuntur possimus, odio quae error temporibus 
              repudiandae, sequi sint, pariatur fugit! Laborum enim et amet non 
              quasi incidunt esse illum.
            </p>
            <p className="text-[19px] font-mono">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Minima aliquid consequuntur possimus, odio quae error temporibus 
              repudiandae, sequi sint, pariatur fugit! Laborum enim et amet non 
              quasi incidunt esse illum.
            </p>
            <Link
            to='/contact' 
            className="text-red-400 text-xl font-serif bg-slate-400/20 w-fit p-2 rounded-xl self-end hover:bg-white hover:text-blue-400">Contact Us</Link>
          </div>
          <div className="sm:hidden">
            <img 
            src="menzuma.jfif" 
            alt="Qirat center"
            className="rounded-3xl h-[500px] w-[1250px]" 
            />
          </div>
        </div>
        <hr />
        <div className="flex flex-row-reverse justify-between gap-8 md:flex-col">
        <div className="flex flex-col justify-evenly w-[1000px] md:w-[590px] md:gap-7 sm:gap-7">
            <h3 className="text-[23px] font-serif font-semibold">Student Schedules</h3>
            <p className="text-[19px] font-mono">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Minima aliquid consequuntur possimus, odio quae error temporibus 
              repudiandae, sequi sint, pariatur fugit! Laborum enim et amet non 
              quasi incidunt esse illum.
            </p>
            <p className="text-[19px] font-mono">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Minima aliquid consequuntur possimus, odio quae error temporibus 
              repudiandae, sequi sint, pariatur fugit! Laborum enim et amet non 
              quasi incidunt esse illum.
            </p>
          </div>
          <div className="sm:hidden">
            <img 
            src="ahmed.jpg" 
            alt="Qirat center"
            className="rounded-3xl h-[500px] w-[1250px] md:w-[1200px]" 
            />
          </div>
        </div>
        <hr />
        <div className="flex justify-between gap-8 md:flex-col">
          <div className="flex flex-col justify-evenly w-[1000px] md:w-[590px] md:gap-7 sm:gap-7">
            <h3 className="text-[23px] font-serif font-semibold">Helping helpless</h3>
            <p className="text-[19px] font-mono">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Minima aliquid consequuntur possimus, odio quae error temporibus 
              repudiandae, sequi sint, pariatur fugit! Laborum enim et amet non 
              quasi incidunt esse illum.
            </p>
            <p className="text-[19px] font-mono">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Minima aliquid consequuntur possimus, odio quae error temporibus 
              repudiandae, sequi sint, pariatur fugit! Laborum enim et amet non 
              quasi incidunt esse illum.
            </p>
          </div>
          <div className="sm:hidden">
            <img 
            src="scholar.webp" 
            alt="Qirat center"
            className="rounded-3xl h-[500px] w-[1250px]" 
            />
          </div>
        </div>
    </div>
  )
}

export default Services