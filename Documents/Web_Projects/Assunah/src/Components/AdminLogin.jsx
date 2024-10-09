import { signInWithEmailAndPassword, getAuth } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AdminLogin = () => {

  const auth = getAuth()

  const navigation = useNavigate()

  const [loggers, setLoggers] = useState({})

  const Submitted = (e) => {

    e.preventDefault()

    setLoggers({
      Email: '',
      Password: ''
    })
    
    signInWithEmailAndPassword(auth, loggers.Email, loggers.Password)
    .then(() => navigation('/main'))
    .catch(err => alert(err.message))

  }

  const handleChange = (event) => {

    const name = event.target.name
    const value = event.target.value

    setLoggers(values => ({...values, [name]: value}))
  }

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-10">
        <h3 className="text-[23px] font-serif font-semibold">Login</h3>
      <div>
          <form 
          id="AdminForm"
          onSubmit={Submitted}
          className="flex flex-col gap-5">
            <label 
            className="flex flex-col gap-4 font-serif text-[20px]"
            htmlFor="email">
              Email:
              <input 
              type="email" 
              name="Email"
              placeholder="Your Email" 
              required
              className="bg-slate-200 p-2 rounded-lg w-72" 
              value={loggers.Email}
              onChange={handleChange}
              />
            </label>
            <label 
            className="flex flex-col gap-4 font-serif text-[20px]"
            htmlFor="password">
              Password:
              <input 
              type="password"
              name="Password"
              placeholder="Your Password" 
              required
              className="bg-slate-200 p-2 rounded-lg w-72"
              value={loggers.Password}
              onChange={handleChange}
              />
            </label>
            <input 
            type="submit" 
            value="Submit" 
            className="bg-green-200 w-fit p-2 rounded-lg self-center cursor-pointer"
            />
          </form>
      </div>
    </div>
  )
}

export default AdminLogin