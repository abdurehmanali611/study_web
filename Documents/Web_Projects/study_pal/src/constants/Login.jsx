import { useState } from "react";

const Login = () => {

  const [credentials, setCredentials] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("success!");

    console.log(credentials);

    setCredentials({
      Email: '',
      Password: ''
    })
  }

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen">
       <h3 className="font-serif text-2xl text-red-400">Login</h3>
      <div>
          <form 
          className="flex flex-col gap-5"
          onSubmit={(e) => handleSubmit(e)}
          >
            <label
            className="flex flex-col gap-5 font-serif text-xl" 
            htmlFor="Email">
              Email: 
              <input 
              type="email" 
              name="email" 
              placeholder="Enter your email"
              value={credentials.Email}
              onChange={handleChange}
              className="bg-slate-200 px-2 py-1 rounded-lg w-72 mx-3" 
              required 
              />
            </label>
            <label 
            className="flex flex-col gap-5 font-serif text-xl"
            htmlFor="Password">
              Password: 
              <input 
              type="password" 
              name="Password" 
              placeholder="Enter your password" 
              minLength={6}
              value={credentials.Password}
              onChange={handleChange}
              className="bg-slate-200 px-2 py-1 rounded-lg w-72 mx-3"
              required 
              />
            </label>
            <input 
            type="submit" 
            value="Submit" 
            className="bg-green-400 w-28 h-12 rounded-xl self-center cursor-pointer text-center"
            />
          </form>
      </div>
    </div>
  )
}

export default Login