import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Home = () => {

  const viewRef = useRef()
  const isInView =useInView(viewRef, {once: true})

  return (
    <div>
      <motion.div
        initial={{
          rotate: "0deg",
          scale: 0,
        }}
        animate={{
          rotate: "360deg",
          scale: 1,
        }}
        transition={{
          duration: 5,
          ease: "easeIn",
        }}
        className="flex justify-between mx-3 items-center h-[550px] sm:flex-col sm:mb-72 sm:gap-7"
      >
        <div className="px-10 flex flex-col gap-5">
          <h3 className="text-[65px] text-green-600">Assunah Tv</h3>
          <h1 className="text-[55px] text-red-500">The Moderate Way</h1>
          <p className="text-[45px]">
            We are Muslims to serve
            <br />
            Islam
          </p>
          <Link
            to="/about"
            className="bg-green-600 rounded-xl hover:bg-green-100 w-44 mx-10 h-12 flex justify-center items-center"
          >
            Learn More
          </Link>
        </div>
        <div
        >
          <img
            src="/as-sunnah Gold V2.png"
            alt="Assunah"
            className="w-64 rounded-xl"
          />
        </div>
      </motion.div> 
      <hr />
      <motion.div
      initial = {{
        scale: 0,
      }}
      animate = {{
        scale: 1
      }}
      transition={{
        duration: 5,
        ease: 'easeInOut'
      }}
      whileInView={{
        backgroundColor: !isInView ? `rgba(100,120,130,0.4)`: 'whitesmoke',
        paddingTop: 10,
        paddingBottom: 10
      }}
      className="my-10"
     >
        <div className="flex justify-between mx-16 md:flex-col md:gap-6">
          <div className="h-10 w-2 rounded-xl bg-black my-10 z-20 absolute md:hidden sm:hidden"/>
          <div className="h-[420px] w-2 rounded-xl bg-slate-200/70 md:hidden sm:hidden"/>
          <div className="flex flex-col justify-evenly sm:gap-4 sm:py-2">
            <h3 className="text-[25px] font-serif">Vision</h3>
            <h2 className="text-[25px] font-sans font-semibold">We&apos;re spreading the Right 
            <br />and Moderate way of Islam</h2>
            <p className="text-[18px] sm:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              <br />Minima nam provident rem dolorum explicabo dignissimos
              <br />sapiente quibusdam exercitationem, voluptas cupiditate 
              <br />porro nostrum vero nisi ducimus excepturi rerum dolor 
              <br />quisquam cum!
                    Lorem ipsum dolor sit amet consectetur 
              <br />adipisicing elit. Est a reprehenderit provident officiis 
              <br />quisquam fugiat sed quidem possimus nemo
              <br />molestiae, deserunt odit.
            </p>
          </div>
          <div className="sm:hidden">
            <img 
            src="/assunahmosque.png" 
            alt="Assunah Mosque"
            className="w-[430px] h-[430px] rounded-3xl"
             />
          </div>
        </div>
      </motion.div>
      <hr />
      <div className="mx-16 my-10 flex flex-col gap-10">
        <div className="flex gap-12">
          <div>
            <div className="h-10 bg-black w-2 z-20 absolute my-5 rounded-3xl"/>
            <div className="h-44 bg-slate-300 w-2"/>
          </div>
          <div className="py-2 flex flex-col justify-evenly">
            <h3 className="text-[23px] font-semibold font-serif">Services</h3>
            <p className="text-[19px] font-mono">
              Lorem ipsum dolor sit amet 
              <br />Dolorem eum odit voluptatum 
              <br />cumque minus sint
            </p>
          </div>
        </div>
        <div className="flex justify-between md:flex-col md:gap-7">
            <div className="flex flex-col gap-5">
              <h3 className="text-[23px] font-serif font-semibold">Student Graduation</h3>
              <p className="text-[19px] font-mono md:font-serif sm:font-serif sm:text-2xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                <br />Odit nam itaque consequuntur, suscipit fuga accusantium 
                <br />explicabo nostrum. Dolore maiores voluptatum iste non 
                <br />libero aspernatur commodi, qui ducimus accusamus totam quae?
              </p>
              <Link 
                to='/service'
                className="flex gap-2 bg-slate-200/80 w-fit px-3 rounded-3xl h-10 items-center md:hidden">
                <p className="text-red-600">Read More</p>
            </Link>
            </div>
            <div className="md:flex md:flex-col md:gap-10 sm:hidden">
              <img 
              src="/recite_child.jpg" 
              alt="Child Recite"
              className="w-96 rounded-[20px]"
               />
               <Link 
                to='/contact'
                className="gap-2 bg-slate-200/80 w-fit px-3 rounded-3xl h-10 items-center hidden md:flex">
                <p className="text-red-600">Contact US</p>
            </Link>
            </div>
        </div>
      </div>
      <hr />
      <div className="mx-16 my-20 flex justify-between md:flex-col md:gap-7">
        <div className="sm:hidden">
          <img 
          src="/recite_kitab.avif" 
          alt="Kitab"
          className="w-[500px] h-96 rounded-[30px]" 
          />
        </div>
        <div className="flex flex-col justify-evenly md:gap-4 sm:gap-4">
            <h3 className="text-[23px] font-serif font-semibold">Teachings</h3>
            <p className="text-[19px] font-mono md:font-serif sm:font-serif sm:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br />Vitae enim voluptatibus iure voluptas, recusandae minus 
              <br />cumque laudantium nesciunt exercitationem tempora 
              <br />aliquam modi praesentium? Ab corporis nesciunt, aperiam 
              <br />dignissimos eum adipisci?
            </p>
            <Link 
            to='/service'
            className="flex gap-2 bg-slate-200 w-fit px-3 rounded-3xl h-10 items-center">
                <p className="text-red-600">Read More</p>
            </Link>
        </div>
      </div>
      <hr />
      <div className="mx-16 my-20 flex justify-between md:flex-col md:gap-5">
        <div className="flex flex-col justify-evenly md:gap-4 sm:gap-4">
          <h3 className="text-[23px] font-serif font-semibold">Student Programs</h3>
          <p className="text-[19px] font-sans sm:font-serif sm:text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            <br />Odio eligendi suscipit earum sed illo nobis aut iste natus 
            <br />neque quisquam molestiae omnis consequuntur, facilis est, 
            <br />possimus repellat dignissimos a unde?
          </p>
          <Link 
            to='/service'
            className="flex gap-2 bg-slate-200 w-fit px-3 rounded-3xl h-10 items-center md:hidden">
                <p className="text-red-600">Read More</p>
            </Link>
        </div>
        <div className="md:flex md:flex-col md:gap-5 sm:hidden">
          <img 
          src="/menzuma.jfif" 
          alt="Menzuma" 
          className="h-80 rounded-2xl w-[450px]"
          />
          <Link 
            to='/service'
            className="md:flex gap-2 bg-slate-200 w-fit px-3 rounded-3xl h-10 items-center hidden">
                <p className="text-red-600">Read More</p>
            </Link>
        </div>
      </div>
      <hr />
      <div className="my-10">
      <div className="flex z-20 absolute mx-16 my-10 bg-black h-screen w-[520px] py-10 px-2 gap-5 md:h-fit sm:py-3 sm:w-fit sm:h-fit sm:my-4">
        <div>
          <div className="z-20 absolute bg-white h-20 w-3 my-10 rounded-lg -mx-1 sm:hidden"/>
          <div className="bg-slate-200 h-full w-1 sm:hidden"/>
        </div>
        <div className="flex flex-col text-white items-center justify-evenly md:gap-3 sm:gap-4">
          <h3 className="text-[23px] font-serif font-bold">Schedules of Schools</h3>
          <p className="text-[19px] font-sans leading-relaxed flex-wrap">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores officia porro perferendis quam possimus quasi 
            beatae similique sint dignissimos nisi delectus omnis id, 
            in ullam aspernatur velit sapiente dicta modi.
          </p>
          <p className="text-[19px] font-sans leading-relaxed md:hidden sm:hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores officia porro perferendis quam possimus quasi 
            beatae similique sint dignissimos nisi delectus omnis id, 
            in ullam aspernatur velit sapiente dicta modi.
          </p>
          <Link 
            to='/service'
            className="flex gap-2 bg-slate-200 w-fit px-3 rounded-3xl h-10 items-center">
                <p className="text-red-600">Read More</p>
            </Link>
        </div>
      </div>
        <img 
        src="/background.jfif" 
        alt="Program" 
        className="w-full sm:w-full sm:h-96 h-[660px]"
        />
      </div>
      <hr />
      <div className="mx-16 my-20 flex justify-between md:flex-col md:gap-4">
        <div className="flex flex-col justify-evenly md:gap-3 sm:gap-5">
          <h3 className="text-[23px] font-serif font-semibold">Helping Helplesses</h3>
          <p className="text-[19px] leading-9 md:leading-8 sm:leading-8 sm:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            <br />Nesciunt ab ut consectetur corporis quod! Officiis, porro 
            <br />sint doloremque eum quia, amet corporis repellendus vero 
            <br />temporibus doloribus nisi maxime et quod!
          </p>
          <Link 
            to='/service'
            className="flex gap-2 bg-slate-200 w-fit px-3 rounded-3xl h-10 items-center md:hidden">
                <p className="text-red-600">Read More</p>
            </Link>
        </div>
        <div className="md:flex md:flex-col md:gap-4 sm:hidden">
          <img 
          src="/scholar.webp" 
          alt="student play" 
          className="h-[450px] rounded-2xl w-[550px]"
          />
          <Link 
            to='/service'
            className="md:flex gap-2 bg-slate-200 w-fit px-3 rounded-3xl h-10 items-center hidden">
                <p className="text-red-600">Read More</p>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
