
const DescriptiveStat = () => {

  const concepts = [
    {
      name: 'Descriptive Statistics',
      image: '/descriptive.jfif',
      paragraph: 'Descriptive statistics summarizes or describes the characteristics of a data set. Descriptive statistics consists of three basic categories of measures: measures of central tendency, measures of variability (or spread), and frequency distribution.'
    },
    {
      name: 'Measure of Central Tendency',
      image: '/centralTendency.webp',
      paragraph: 'A measure of central tendency (also referred to as measures of centre or central location) is a summary measure that attempts to describe a whole set of data with a single value that represents the middle or centre of its distribution. There are three main measures of central tendency: mode. median. mean.'
    },
    {
      name: 'Measure of Spread',
      image: '/spread.png',
      paragraph: 'Definition. Measures of spread describe how similar or varied the set of observed values are for a particular variable (data item). Measures of spread include the range, quartiles and the interquartile range, variance and standard deviation.'
    }
  ]

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-center font-serif text-xl font-semibold text-red-600">Descriptive Statistics</h3>
        <video 
        controls
        className="rounded-2xl mx-48"
        >
          <source 
          src="/descriptive.mp4" 
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
      <h3 className="text-center font-serif font-semibold text-xl mt-10">This Are a few concepts on Descriptive statistics to inspire you in searching More !!!</h3>
    </div>
  )
}

export default DescriptiveStat