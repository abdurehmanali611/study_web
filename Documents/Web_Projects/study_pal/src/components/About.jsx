
const About = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center py-12">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-11/12">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6 text-center">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Welcome to Study Pal! Our mission is to empower students and lifelong learners with the tools they need to excel in their studies. Study Pal is designed to help you manage your study routine efficiently, stay organized, and achieve your academic goals. Whether you&apos;re a high school student, a college student, or someone pursuing continuous education, Study Pal is here to support your journey.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Our app offers a variety of features tailored to enhance your study experience. From customizable study schedules and reminders to collaborative study groups and resource sharing, we aim to cover all aspects of your academic needs. We understand that every learner is unique, and our goal is to provide a flexible platform that adapts to different learning styles and preferences.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          At Study Pal, we believe in the power of community and collaboration. By connecting with fellow learners, you can share knowledge, seek advice, and find motivation to stay on track. Our platform is built with a user-friendly interface that makes it easy to navigate and utilize all the features available. We are committed to continuously improving Study Pal based on user feedback and technological advancements.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          The creation of Study Pal was driven by our shared passion for education and technology. With a strong background in software development, we combined our skills and vision to build a tool that truly makes a difference in the lives of students. We are dedicated to ensuring that Study Pal remains a valuable resource for all learners, helping them to achieve their academic aspirations and beyond.
        </p>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Team</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Meet the founders of Study Pal:
        </p>
        <div className="flex md:flex-row justify-around items-center mb-8 sm:flex-col">
          <div className="mb-6 md:mb-0 text-center">
            <img 
            src="abdu.jfif" 
            alt="Abdurehman Ali" 
            className="w-24 h-24 rounded-full mb-3 mx-auto"
            />
            <p className="text-xl font-semibold text-gray-800">Abdurehman Ali</p>
            <p className="text-gray-600 md:hidden">Co-Founder & Developer</p>
          </div>
          <div className="mb-6 md:mb-0 text-center">
            <img 
            src="rohobot.webp" 
            alt="Rohbot Haile" 
            className="w-24 h-24 rounded-full mb-3 mx-auto"
            />
            <p className="text-xl font-semibold text-gray-800">Rohbot Haile</p>
            <p className="text-gray-600 md:hidden">Co-Founder & Developer</p>
          </div>
          <div className="text-center">
            <img 
            src="eyob.webp" 
            alt="Eyob" 
            className="w-24 h-24 rounded-full mb-3 mx-auto"
            />
            <p className="text-xl font-semibold text-gray-800">Eyob</p>
            <p className="text-gray-600 md:hidden">Co-Founder & Developer</p>
          </div>
        </div>
        <p className="hidden md:block text-center font-serif text-lg">Co-Founders & Developers</p>
        <hr className="my-5"/>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          We love hearing from our users! If you have any questions, feedback, or suggestions, please reach out to us. Together, we can make Study Pal the best study companion for students everywhere.
        </p>
      </div>
    </div>
  );
}

export default About;
