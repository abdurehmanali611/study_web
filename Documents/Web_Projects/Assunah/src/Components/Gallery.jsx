
const Gallery = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 mx-5 my-5">
        <div className="flex justify-between gap-56 self-center">
          <div className="flex flex-col self-center items-center">
            <h1 className="text-xl font-serif my-3">Student&apos;s classroom registration</h1>
            <p className="text-center w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Maiores ea vero veritatis accusantium illum ab sequi cupiditate. 
              Doloribus architecto accusantium harum, officiis distinctio corporis 
              nostrum alias dicta. Consequuntur, dicta harum.
            </p>
          </div>
          <img 
          src="/graduation2.jfif" 
          alt="Student Registration"
          className="w-fit h-fit rounded-lg"
          />
        </div>
        <div className="flex justify-between gap-56 self-center">
        <img 
          src="/graduation2.jfif" 
          alt="Student Registration"
          className="w-fit h-fit rounded-lg"
          />
          <div className="flex flex-col self-center items-center">
            <h1 className="text-xl font-serif my-3">Student&apos;s classroom attending</h1>
            <p className="text-center w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Maiores ea vero veritatis accusantium illum ab sequi cupiditate. 
              Doloribus architecto accusantium harum, officiis distinctio corporis 
              nostrum alias dicta. Consequuntur, dicta harum.
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-56 self-center">
          <div className="flex flex-col self-center items-center">
            <h1 className="text-xl font-serif my-3">Student&apos;s classroom graduation</h1>
            <p className="text-center w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Maiores ea vero veritatis accusantium illum ab sequi cupiditate. 
              Doloribus architecto accusantium harum, officiis distinctio corporis 
              nostrum alias dicta. Consequuntur, dicta harum.
            </p>
          </div>
          <img 
          src="/graduation2.jfif" 
          alt="Student Registration"
          className="w-fit h-fit rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery