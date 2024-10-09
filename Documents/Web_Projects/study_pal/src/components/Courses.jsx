import { Link } from "react-router-dom"

const Courses = () => {

  const ProgrammingAndTech = [
    {
      name: 'Basic C++',
      image: '/basicc++.jpg',
      navigate: '/basicprog'
    },
    {
      name: 'Mobile App Development',
      image: '/mobileapp.jpg',
      navigate: '/mobileApp'
    },
    {
      name: 'Web Development',
      image: '/webdev.png',
      navigate: '/webdev'
    },
    {
      name: 'Data Science and Machine Learning',
      image: '/DSML.jpg',
      navigate: '/dsAndML'
    },
    {
      name: 'Graphic Design',
      image: '/graphic.png',
      navigate: '/graphic'
    },
    {
      name: 'Digital Marketing(SMMA)',
      image: '/digital.png',
      navigate: '/digital'
    },
    {
      name: 'Video Editing',
      image: '/video.png',
      navigate: '/videoedit'
    }
  ]

  const softSkills = [
    {
      name: 'Sales and Marketing',
      image: '/sale.jfif',
      navigate: '/sales'
    },
    {
      name: 'Communication',
      image: '/communicate.jfif',
      navigate: '/communicate'
    },
    {
      name: 'Psycology',
      image: '/psyco.png',
      navigate: '/psycology'
    },
    {
      name: 'Financial Management',
      image: '/finance.png',
      navigate: '/finance'
    }
  ]

  const socialScience = [
    {
      name: 'Law',
      image: '/law.jfif',
      navigate: '/law'
    },
    {
      name: 'Management',
      image: '/management.webp',
      navigate: '/manage'
    },
    {
      name: 'Accounting',
      image: '/account.png',
      navigate: '/account'
    }
  ]

  const MathAndStat = [
    {
      name: 'Basic Mathematics',
      image: '/basicmath.png',
      navigate: '/basicmath'
    },
    {
      name: 'Applied Mathimatics',
      image: '/appliedmath.webp',
      navigate: '/applied'
    },
    {
      name: 'Descriptive Statistics',
      image: '/descriptive.jfif',
      navigate: '/descript'
    },
    {
      name: 'Inferential Statistics',
      image: '/inferential.png',
      navigate: '/inference'
    }
  ]

  return (
    <div>
      <div className="flex flex-col gap-10">
        <h3 className="text-center font-serif text-2xl text-red-700">Mathematics and Statistics</h3>
        <div className="flex gap-10 flex-wrap justify-center">
        {MathAndStat.map((item, index) => (
          <div 
          className="flex flex-col gap-5 items-center"
          key={index}>
              <img 
              src={item.image} 
              alt={item.name} 
              className="w-[360px] rounded-xl h-64"
              />
              <Link
              to={item.navigate}
              className="font-serif font-semibold text-xl bg-green-300 w-fit p-3 rounded-xl">
                {item.name}
              </Link>
          </div>
        ))}
        </div>
      </div>
      <hr className="my-6"/>
      <div className="flex flex-col gap-10">
        <h3 className="text-center font-serif text-2xl text-red-700">Programming and Tech</h3>
        <div className="flex gap-16 flex-wrap justify-center">
        {ProgrammingAndTech.map((item, index) => (
          <div 
          className="flex flex-col gap-5 items-center"
          key={index}>
              <img 
              src={item.image} 
              alt={item.name} 
              className="w-80 rounded-xl h-48"
              />
              <Link 
              to={item.navigate}
              className="font-serif font-semibold text-xl bg-green-300 w-fit p-3 rounded-xl">
                {item.name}
              </Link>
          </div>
        ))}
        </div>
      </div>
      <hr className="my-6"/>
      <div className="flex flex-col gap-10">
        <h3 className="text-center font-serif text-2xl text-red-700">Social Science</h3>
        <div className="flex gap-10 flex-wrap justify-center">
        {socialScience.map((item, index) => (
          <div 
          className="flex flex-col gap-5 items-center"
          key={index}>
              <img 
              src={item.image} 
              alt={item.name} 
              className="w-80 rounded-xl"
              />
              <Link 
              to={item.navigate}
              className="font-serif font-semibold text-xl bg-green-300 w-fit p-3 rounded-xl">
                {item.name}
              </Link>
          </div>
        ))}
        </div>
      </div>
      <hr className="my-6"/>
      <div className="flex flex-col gap-10">
        <h3 className="text-center font-serif text-2xl text-red-700">Soft Skills</h3>
        <div className="flex gap-16 flex-wrap justify-center">
        {softSkills.map((item, index) => (
          <div 
          className="flex flex-col gap-5 items-center"
          key={index}>
              <img 
              src={item.image} 
              alt={item.name} 
              className="w-80 rounded-xl h-44"
              />
              <Link 
              to={item.navigate}
              className="font-serif font-semibold text-xl bg-green-300 w-fit p-3 rounded-xl">
                {item.name}
              </Link>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Courses