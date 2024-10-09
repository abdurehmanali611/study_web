
const InferentialStat = () => {

 const concepts = [
    {
      name: 'Inferential Statistics',
      image: '/inferential.png',
      paragraph: 'Inferential statistics are often used to compare the differences between the treatment groups. Inferential statistics use measurements from the sample of subjects in the experiment to compare the treatment groups and make generalizations about the larger population of subjects.'
    }
  ]

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-center font-serif text-xl font-semibold text-red-600">Inferential Statistics</h3>
      <video
      controls
      className="rounded-xl mx-48"
      >
        <source 
        src="/inference.mp4" 
        type="mp4" 
        />
      </video>
      {concepts.map((item, index) => (
        <div key={index}>
          <div
          className="flex justify-between items-center text-center mx-28 my-16 gap-20"
          >
            <div className="w-[450px] flex flex-col gap-5">
            <h4 className="text-xl font-serif font-semibold">{item.name}</h4>
            <p className="text-lg font-mono">{item.paragraph}</p>
            </div>
            <img 
            src={item.image} 
            alt={item.name} 
            className="rounded-xl w-[50%]"
            />
          </div>
        </div>
      ))}
      <h3 className="text-center font-serif font-semibold text-xl mt-10">This Are a few concepts on Inferential Statistics to inspire you in searching More !!!</h3>
    </div>
  )
}

export default InferentialStat