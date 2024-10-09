import { motion } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"

const AboutUs = () => {

  const history = [
    {
      year: <h2 className="text-[20px] font-mono">2010</h2>,
      happened: <h3>Assunah is Formed</h3>,
      disc: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nobis est magni doloremque sapiente, tempore incidunt? Dignissimos 
        in neque aliquam repellendus, unde quas, enim odio animi delectus 
        corporis, veritatis velit recusandae!</p>
    },
    {
      year: <h2 className="text-[20px] font-mono">2010</h2>,
      happened: <h3>Assunah is Formed</h3>,
      disc: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nobis est magni doloremque sapiente, tempore incidunt? Dignissimos 
        in neque aliquam repellendus, unde quas, enim odio animi delectus 
        corporis, veritatis velit recusandae!</p>
    }
  ]

  const renaisance = [
    {
      year: <h2 className="text-[20px] font-mono">2010</h2>,
      happened: <h3>Assunah is Formed</h3>,
      disc: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nobis est magni doloremque sapiente, tempore incidunt? Dignissimos 
        in neque aliquam repellendus, unde quas, enim odio animi delectus 
        corporis, veritatis velit recusandae!</p>
    },
    {
      year: <h2 className="text-[20px] font-mono">2010</h2>,
      happened: <h3>Assunah is Formed</h3>,
      disc: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nobis est magni doloremque sapiente, tempore incidunt? Dignissimos 
        in neque aliquam repellendus, unde quas, enim odio animi delectus 
        corporis, veritatis velit recusandae!</p>
    }
  ]

  return (
    <div className="mx-16 flex flex-col gap-10 my-10 sm:mx-12">
      <motion.div 
      initial = {{
        rotate: '0deg',
        scale: 0
      }}
      animate = {{
        rotate: '360deg',
        scale: 1
      }}
      transition={{
        duration: 5,
        ease: 'easeInOut'
      }}
      className="flex flex-col w-full h-screen items-center gap-10 justify-center sm:w-screen">
        <h3 className="text-[75px] font-mono sm:text-[50px]">Our Journey</h3>
        <p className="text-center w-[550px] text-[25px] leading-10 sm:w-screen sm:text-[20px] sm:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Reiciendis excepturi rerum nisi necessitatibus similique magnam, 
          molestiae quisquam quasi, tempore enim, numquam quaerat accusantium 
          incidunt eum deserunt! Totam doloremque quam sunt!
        </p>
      </motion.div>
      <hr />
        <div className="flex justify-between gap-7 md:flex-col">
           <div className="flex gap-5">
              <div>
                  <div className="bg-green-400 h-24 z-20 absolute my-8 w-4 rounded-2xl md:hidden sm:hidden"/>
                  <div className="bg-red-400 h-[600px] w-2 md:hidden sm:hidden mx-1 rounded-xl"/>
              </div>
              <div className="flex flex-col justify-evenly md:gap-5 sm:gap-5">
                <h3 className="text-[23px] font-serif font-semibold">Our Mission</h3>
                <h4 className="text-[25px] font-bold font-serif">Redefining The way We Move</h4>
                <p className="text-[18px] font-mono md:hidden sm:hidden">
                  Lorem ipsum dolor, sit amet consectetur adipisicing 
                  <br />Asperiores reprehenderit vel illum facere minus sed 
                  <br />explicabo aperiam, voluptates laudantium natus incidunt 
                  <br />temporibus obcaecati repellendus iusto saepe placeat 
                  <br />vero, et aliquam!
                </p>
                <p className="text-[18px] font-mono md:text-[17px] sm:text-[20px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing 
                  <br />Asperiores reprehenderit vel illum facere minus sed 
                  <br />explicabo aperiam, voluptates laudantium natus incidunt 
                  <br />temporibus obcaecati repellendus iusto saepe placeat 
                  <br />vero, et aliquam!
                </p>
              </div>
           </div>
           <div className="sm:hidden">
              <img 
              src="/mohusm.jpg" 
              alt="Doctor Abubeker"
              className="w-[500px] rounded-2xl h-[600px]" 
              />
           </div>
        </div>
        <hr />
        <div className="flex flex-col gap-10">
          <VerticalTimeline
          className="flex justify-between gap-8 sm:flex-col sm:items-center"
          >
            {history.map((item, index) => (
              <VerticalTimelineElement
              key={index}
              date={item.year}
              >
                <div className="flex flex-col gap-5 my-4 bg-slate-400 p-3 rounded-xl">
                <h3 className="text-[23px] font-serif font-semibold">{item.happened}</h3>
                <p className="text-[20px] font-mono md:font-sans">{item.disc}</p>
                </div>
              </VerticalTimelineElement>
              
            ))}
          </VerticalTimeline>
          <VerticalTimeline
          className="flex justify-between gap-8 sm:flex-col sm:items-center"
          >
            {renaisance.map((item, index) => (
              <VerticalTimelineElement
              key={index}
              date={item.year}
              >
                <div className="flex flex-col gap-5 my-4 bg-slate-400 p-3 rounded-xl">
                <h3 className="text-[23px] font-serif font-semibold">{item.happened}</h3>
                <p className="text-[20px] font-mono md:font-sans">{item.disc}</p>
                </div>
              </VerticalTimelineElement>
              
            ))}
          </VerticalTimeline>
        </div>
        <hr />
        <div>
            <img 
            src="/single.jpg" 
            alt="Assunah Team"
            className="w-full rounded-xl"
            />
        </div>
        <div className="flex flex-col gap-4">
            <h3 className="text-center text-2xl font-semibold font-serif">Comments</h3>
          <div className="flex justify-between gap-4 sm:flex-col">
            <div className="flex flex-col gap-5 w-[1800px] bg-gray-400 p-3 rounded-lg md:hidden sm:hidden">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Et, necessitatibus quidem? Nam veritatis enim natus totam 
                  ipsam assumenda, libero aliquid sapiente molestias maxime 
                  odio, corporis vero voluptatibus provident! Eius, quasi.
                </p>
                <h3 className="text-end text-lg">Abdurehman Ali</h3>
            </div>
            <div className="flex flex-col gap-5 w-[1800px] bg-gray-400 p-3 rounded-lg md:w-[2000px] sm:w-[410px]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Et, necessitatibus quidem? Nam veritatis enim natus totam 
                  ipsam assumenda, libero aliquid sapiente molestias maxime 
                  odio, corporis vero voluptatibus provident! Eius, quasi.
                </p>
                <h3 className="text-end text-lg">Abdurehman Ali</h3>
            </div>
            <div className="flex flex-col gap-5 w-[1800px] bg-gray-400 p-3 rounded-lg md:w-[2000px] sm:w-[410px]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Et, necessitatibus quidem? Nam veritatis enim natus totam 
                  ipsam assumenda, libero aliquid sapiente molestias maxime 
                  odio, corporis vero voluptatibus provident! Eius, quasi.
                </p>
                <h3 className="text-end text-lg">Abdurehman Ali</h3>
            </div>
          </div>
          <div className="flex justify-between gap-4 sm:flex-col">
            <div className="flex flex-col gap-5 w-[1800px] bg-gray-400 p-3 rounded-lg md:hidden sm:hidden">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Et, necessitatibus quidem? Nam veritatis enim natus totam 
                  ipsam assumenda, libero aliquid sapiente molestias maxime 
                  odio, corporis vero voluptatibus provident! Eius, quasi.
                </p>
                <h3 className="text-end text-lg">Abdurehman Ali</h3>
            </div>
            <div className="flex flex-col gap-5 w-[1800px] bg-gray-400 p-3 rounded-lg sm:w-[410px]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Et, necessitatibus quidem? Nam veritatis enim natus totam 
                  ipsam assumenda, libero aliquid sapiente molestias maxime 
                  odio, corporis vero voluptatibus provident! Eius, quasi.
                </p>
                <h3 className="text-end text-lg">Abdurehman Ali</h3>
            </div>
            <div className="flex flex-col gap-5 w-[1800px] bg-gray-400 p-3 rounded-lg sm:w-[410px]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Et, necessitatibus quidem? Nam veritatis enim natus totam 
                  ipsam assumenda, libero aliquid sapiente molestias maxime 
                  odio, corporis vero voluptatibus provident! Eius, quasi.
                </p>
                <h3 className="text-end text-lg">Abdurehman Ali</h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs