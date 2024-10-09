import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { database } from '../config/firebase'

const Footer = () => {

  const [email, setEmail] = useState('')

  const collectionRef = collection(database, 'Subscribers')

  const Subscription = (event) => {

    event.preventDefault()

    const name = prompt('Please enter your Name')
    
    addDoc(collectionRef, {
      Name: name,
      Email: email
    })
    .then(() => {
      alert(`Welcome to our family ${name}`)
      setEmail("")
    })
    .catch((err) => alert(err.message))
  }

  return (
    <div className="p-3 bg-gray-500">
    <div className="flex justify-between mx-3 items-center sm:flex-col">
      <div className="flex gap-4 mx-10">
        <img 
        src="/as-sunnah Gold V2.png" 
        alt="Assunah Footer" 
        className="w-fit rounded-md h-20"
        />
      </div>
      <ul className="list-none flex-nowrap flex gap-5 py-0 md:flex-row md:gap-7">
          <motion.li
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.5
            }
           }}
          >
            <Link
            to='https://www.facebook.com/p/Cordova-academy-Addiss-Ababa-100065002000068/'
            target="blank"
            >
            <img 
            src="/facebook.png" 
            alt="Facebook" 
            className="w-8 rounded-2xl h-8"
            />
            </Link>
          </motion.li>
          <motion.li
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.5
            }
           }}
          >
            <Link
            to='https://l.facebook.com/l.php?u=https%3A%2F%2Ft.me%2FAssunnahTVOfficial%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR1FqUjnIKP1aTH7Zs5sqYExtD1r37mys6jFLZ9FYjw17htOmF_TxuwsvSs_aem_AcZM1Mm3s3mZXOl94LYxTEvTE2j46RfDqm2X0LqGT0cYTb1iBh5GT0NqOblhivnotbezKjwtys-ADG3n50X0WmaV&h=AT2bT3iyQMAaTdIe_C_i6OltdxrMMoJMqaNUGlfUw9tYs1TF64CnIMJPB5SQKrBBk__dTZTVjjiUQ_Mi0zx6-saVa8exP0bYwQROJqCNNqnAHYoyjofE-xR3W_3ZNVcr4vS0&__tn__=-UK-R&c[0]=AT0PyaOOHUcfLBq_gGYYhOsroVgK-osy8OV1gkAyTRCGchXR3JNfulbyMA7OWbSIEdqjKs4rLJaynL7gAedBQ2KthEciHaDmTfRIQEU59NmWjfvaskzXmkpJ31RW6nh0MC7ccezC-Lbe27jm-_WH__Tm_W-pFmADu09-anAynhGwKdB6XULMY7NvbYmxLNXZIzYY30sbWszNIyA-v5REhG5b-S0Lh1_roPUJl_trktQddA'
            target="blank"
            >
            <img 
            src="/telegram.png" 
            alt="Telegram" 
            className="w-8 rounded-2xl h-8"
            />
            </Link>
          </motion.li>
          <motion.li
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.5
            }
           }}
          >
            <Link
            to='https://www.youtube.com/@as-sunnahtvofficial-2559'
            target="blank"
            >
            <img 
            src="/email.png" 
            alt="Email" 
            className="w-8 rounded-2xl h-8"
            />
            </Link>
          </motion.li>
          <motion.li
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.5
            }
           }}
          >
            <Link
            to='https://www.youtube.com/@as-sunnahtvofficial-2559'
            target="blank"
            >
            <img 
            src="/whatsapp.png" 
            alt="Whatsapp" 
            className="w-8 rounded-2xl h-8"
            />
            </Link>
          </motion.li>
        </ul>
    </div>
     <div className="flex justify-between mx-5 my-5">
            <ul className="flex flex-col gap-5 justify-evenly md:flex-row md:gap-7">
              <li>
                <Link className="text-black hover:text-red-800 text-[20px]" to='/about'>About US</Link>
              </li>
              <li>
                <Link className="text-black hover:text-red-800 text-[20px]" to='/service'>Services</Link>
              </li>
              <li>
                <Link className="text-black hover:text-red-800 text-[20px]" to='/contact'>Contacts</Link>
              </li>
            </ul>
        <div className="flex flex-col gap-5 md:hidden sm:hidden">
          <h3 className="text-[30px] font-semibold font-serif">Subscribe Now</h3>
          <p className="text-[19px] font-serif">Email: </p>
          <form 
          id="subscribe"
          onSubmit={Subscription}
          className="flex gap-0"> 
            <input 
            placeholder="Your Email Address"
            className="bg-slate-300 w-72 h-12 px-2 rounded-l-xl"
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            type="submit" 
            className="bg-green-300 w-24 rounded-r-2xl cursor-pointer"
            />
          </form>
        </div>
     </div>
      <div className="flex justify-between mx-7 md:flex-col-reverse md:gap-5 md:items-center md:my-3 sm:flex-col-reverse sm:gap-4 sm:items-center">
      <p className="text-[20px] text-violet-800">&copy; CopyRight Reserved 2024</p>
      <motion.p
      whileHover={{
        scale: 1.2,
        transition: {
          duration: 0.5
        }
       }}
       className="text-[20px] hover:text-blue-400 text-lime-500"
      >
      <Link
        to='mailto:/assunnahtv.et@gmail.com'
        target="blank"
      >
      Tel: +251 90 300 0102
      </Link>
      </motion.p>
      <motion.p
      whileHover={{
        scale: 1.2,
        transition: {
          duration: 0.5
        }
       }}
       className="text-[20px] text-lime-500 hover:text-blue-400"
      >
      <Link
        to='mailto:/assunnahtv.et@gmail.com'
        target="blank"
      >
      Email: assunnahtv.et@gmail.com
      </Link>
      </motion.p>
      </div>
    </div>
  );
};

export default Footer;
