import { Link } from "react-router-dom"

const AppliedMath = () => {

  const concepts = [
    {
      name: 'Probability',
      image: '/probability.png',
      paragraph: 'Probability is the branch of mathematics concerning events and numerical descriptions of how likely they are to occur. The probability of an event is a number between 0 and 1; the larger the probability, the more likely an event is to occur. A simple example is the tossing of a fair (unbiased) coin.',
      operations: {
        probability: 'https://www.khanacademy.org/math/statistics-probability/probability-library',
        PermutationAndCombination: 'https://www.khanacademy.org/math/statistics-probability/counting-permutations-and-combinations'
      }
    },
    {
      name: 'Calculus',
      image: '/derivative.png',
      paragraph: 'calculus, branch of mathematics concerned with the calculation of instantaneous rates of change (differential calculus) and the summation of infinitely many small factors to determine some whole (integral calculus).',
      operations: {
        precalculus: 'https://www.khanacademy.org/math/precalculus',
        DifferentialCalculus: 'https://www.khanacademy.org/math/differential-calculus',
        IntegralCalculus: 'https://www.khanacademy.org/math/integral-calculus'
      }
    }
  ]

  return (
    <div>
      <h3 className="text-center font-serif text-2xl font-semibold text-red-600">Applied Mathematics Concepts</h3>
      {concepts.map((item, index) => (
          <div key={index}>
          <div
          className="flex justify-between items-center text-center mx-28 my-16 gap-10">
            <div className="w-[450px] flex flex-col gap-5">
            <h4 className="text-xl font-serif font-semibold">{item.name}</h4>
            <p className="text-lg font-mono">{item.paragraph}</p>
            </div>
            <img 
            src={item.image} 
            alt={item.name} 
            className="rounded-xl"
            />
          </div>
          <div>
            {item.operations.probability || item.operations.PermutationAndCombination ? (
              <div className="flex gap-10 justify-center">
                <h3 className="font-mono text-lg">For More Information: </h3>
                <Link 
                target="_blank"
                className="text-lg font-serif text-blue-700 hover:text-green-400 uppercase"
                to={item.operations.probability}>Probability</Link>
                <Link 
                target="_blank"
                className="text-lg font-serif text-blue-700 hover:text-green-400 uppercase"
                to={item.operations.PermutationAndCombination}>Permutation and Combination</Link>
              </div>
            ):(
              <div className="flex gap-10 justify-center">
                <h3 className="font-mono text-lg">For More Information: </h3>
                <Link
                target="_blank" 
                className="text-lg font-serif text-blue-700 hover:text-green-400 uppercase"
                to={item.operations.precalculus}>PreCalculus</Link>
                <Link 
                target="_blank"
                className="text-lg font-serif text-blue-700 hover:text-green-400 uppercase"
                to={item.operations.DifferentialCalculus}>Differential Calculus</Link>
                <Link 
                target="_blank"
                className="text-lg font-serif text-blue-700 hover:text-green-400 uppercase"
                to={item.operations.IntegralCalculus}>Integral Calculus</Link>
              </div>
            )}
          </div>
          </div>
        ))}
        <h3 className="text-center font-serif font-semibold text-xl mt-10">This Are a few concepts on Applied mathematics to inspire you in searching More !!!</h3>
    </div>
  )
}

export default AppliedMath