 
const History = () => {

  return (
    <div>
      <div className="flex justify-between gap-16 md:flex-col md:gap-5">
        <div className="flex flex-col gap-5 items-center justify-center">
            <h3 className="font-serif text-xl">Studying...</h3>
            <p className="text-lg font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Iste animi inventore molestiae exercitationem quam perspiciatis 
              nostrum laboriosam id magnam earum blanditiis, aliquam corporis 
              optio esse dolore ea at adipisci odit?
            </p>
            <p className="text-lg font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Iste animi inventore molestiae exercitationem quam perspiciatis 
              nostrum laboriosam id magnam earum blanditiis, aliquam corporis 
              optio esse dolore ea at adipisci odit?
            </p>
        </div>
        <div className="sm:hidden">
            <img 
            src="/studying.jfif" 
            alt="Studying" 
            className="w-[1700px] rounded-xl h-72"
            />
        </div>
      </div>
    <hr className='my-6'/>
    <div className="flex justify-between gap-16 md:flex-col-reverse md:gap-5">
      <div className = "sm:hidden">
            <img 
            src="/google.jpg" 
            alt="Studying" 
            className="w-[1700px] rounded-xl h-72"
            />
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
            <h3 className="font-serif text-xl">Where are our Students...</h3>
            <p className="text-lg font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Iste animi inventore molestiae exercitationem quam perspiciatis 
              nostrum laboriosam id magnam earum blanditiis, aliquam corporis 
              optio esse dolore ea at adipisci odit?
            </p>
            <p className="text-lg font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Iste animi inventore molestiae exercitationem quam perspiciatis 
              nostrum laboriosam id magnam earum blanditiis, aliquam corporis 
              optio esse dolore ea at adipisci odit?
            </p>
        </div>
      </div>
    </div>
  )
}

export default History