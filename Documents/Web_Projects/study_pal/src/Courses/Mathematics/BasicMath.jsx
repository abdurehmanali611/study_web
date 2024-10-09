import { Link } from "react-router-dom"

const BasicMath = () => {

  const concepts = [
    {
      name: 'Arithmetic Operations',
      image: '/arithmetic.png',
      paragraph: 'Arithmetic operations are ways of combining, transforming, or manipulating numbers. They are functions that have numbers both as input and output. The most important operations in arithmetic are addition, subtraction, multiplication, and division.',
      operations: {
        Addition: 'https://www.education.com/worksheets/addition/',
        Subtraction: 'https://www.education.com/worksheets/subtraction/',
        Multiplication: 'https://www.education.com/worksheets/multiplication/',
        Division: 'https://www.education.com/worksheets/division/'
      }
    },
    {
      name: 'BODMAS rule',
      image: '/BODMAS.png',
      paragraph: 'The Bodmas rule follows the order of the BODMAS acronym ie B  Brackets, O  Order of powers or roots, D  Division, M  Multiplication A  Addition, and S  Subtraction. Mathematical expressions with multiple operators need to be solved from left to right in the order of BODMAS.',
      operations: {
        BODMAS: 'https://byjus.com/maths/bodmas-rule-questions/'
      }
    },
    {
      name: 'Algebra and Geometry',
      image: '/algebra.jpg',
      paragraph: 'Algebra is an area of mathematics that uses variables in the form of letters and symbols, in place of quantities or numbers in formulae and equations. And  Geometry is an area in mathematics that studies points, lines, multi-dimensional objects and shapes, surfaces and solids.',
      operations: {
        Algebra: 'https://www.education.com/worksheets/algebra/',
        Geometry: 'https://www.education.com/worksheets/geometry/'
      }
    },
    {
      name: 'Pythagoras Theorem',
      image: '/pythagoras.webp',
      paragraph: 'Pythagorean theorem, the well-known geometric theorem that the sum of the squares on the legs of a right triangle is equal to the square on the hypotenuse (the side opposite the right angle)—or, in familiar algebraic notation, a2 + b2 = c2.',
      operations: {
        pythagorean: 'https://www.scaffoldedmath.com/2019/05/fun-pythagorean-theorem-activities-and-teaching-ideas.html'
      }
    }
  ]

  return (
    <div>
      <h3 className="text-center font-serif text-2xl font-semibold text-red-600">Basic Mathimatics Concept</h3>
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
              {item.operations.Addition || item.operations.Subtraction || item.operations.Multiplication || item.operations.Division ? (
                <div className="flex gap-10 justify-center">
                  <h5 className="font-mono text-lg">For More Information: </h5>
                  <Link 
                  target="_blank"
                  className="text-lg font-serif text-blue-700 hover:text-green-400 uppercase"
                  to={item.operations.Addition}>Addition</Link>
                  <Link 
                  target="_blank"
                  className="text-lg font-serif text-blue-700 hover:text-green-400 uppercase"
                  to={item.operations.Subtraction}>Subtraction</Link>
                  <Link 
                  target="_blank"
                  className="text-lg font-serif text-blue-700 hover:text-green-400 uppercase"
                  to={item.operations.Multiplication}>Multiplication</Link>
                  <Link 
                  target="_blank"
                  className="text-lg font-serif text-blue-700 hover:text-green-400 uppercase"
                  to={item.operations.Division}>Division</Link>
                </div>
              ):(
                item.operations.BODMAS ? (
                  <div className="flex gap-10 justify-center">
                    <h5 className="font-mono text-lg">For More Information: </h5>
                    <Link 
                    target="_blank"
                    className="text-lg font-serif text-blue-700 hover:text-green-400 uppercase"
                    to={item.operations.BODMAS}>BODMAS</Link>
                  </div>
                ):(
                  item.operations.Algebra || item.operations.Geometry ? (
                    <div className="flex gap-10 justify-center">
                      <h5 className="font-mono text-lg">For More Information: </h5>
                      <Link
                      target="_blank" 
                      className="text-lg font-serif text-blue-700 hover:text-green-400 uppercase"
                      to={item.operations.Algebra}>Algebra</Link>
                      <Link 
                      target="_blank"
                      className="text-lg font-serif text-blue-700 hover:text-green-400 uppercase"
                      to={item.operations.Geometry}>Geometry</Link>
                    </div>
                  ):(
                    item.operations.pythagorean && (
                      <div className="flex gap-10 justify-center">
                        <h5 className="font-mono text-lg">For More Information: </h5>
                        <Link
                        target="_blank" 
                        className="text-lg font-serif text-blue-700 hover:text-green-400 uppercase"
                        to={item.operations.pythagorean}>Pythagorean Theorem</Link>
                      </div>
                    )
                  )
                )
              )}
            </div>
          </div>
        ))}
        <h3 className="text-center font-serif font-semibold text-xl mt-10">This Are a few concepts on Basic mathematics to inspire you in searching More !!!</h3>
    </div>
  )
}

export default BasicMath