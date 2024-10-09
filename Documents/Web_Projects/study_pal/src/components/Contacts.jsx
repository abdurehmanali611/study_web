import { useState } from "react"
import { Link } from "react-router-dom"

const Contacts = () => {

  const [form,setForm] = useState({})

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setForm(values => ({...values, [name]: value}))
  }

  const Submitted = (e) => {
      e.preventDefault()
      alert(`successfully submitted ${form.Name}`)

      setForm({ Name: '', Email: '', title: '', description: '' })

  }

  return (
    <div className="mx-8 my-10 flex flex-col gap-20 md:mx-2">
       <div className="h-56 flex flex-col justify-evenly">
        <h3 className="text-[23px] font-serif font-semibold">Contact Us</h3>
        <header className="text-[20px] w-80 font-serif font-extrabold">For Inquiries Or Questions</header>
        <p className="text-[19px] font-mono">Please use the Form or call us on  
          <Link 
          to='tel:/+251935000642'
          className="text-red-500 hover:text-cyan-500"> +251935000642</Link>
        </p>
       </div>
       <hr />
       <div className="flex justify-between md:flex-col-reverse md:gap-5">
        <form
        onSubmit={Submitted}>
          <div className="flex gap-16 my-10 md:gap-10 sm:flex-col">
            <label
            className="text-[20px] font-serif font-semibold flex flex-col gap-5" 
            htmlFor="name">
              Full Name
            <input 
            type="text" 
            placeholder="Your Name"
            name="Name"
            className="w-80 bg-slate-100 h-12 rounded-xl px-3 md:w-[300px] sm:w-full"
            value={form.Name}
            onChange={handleChange}
            required
            />
            </label>
            <label 
            className="text-[20px] font-serif font-semibold flex flex-col gap-5"
            htmlFor="emailAddress">
             Email
            <input 
            type="text" 
            placeholder="Your Email"
            name="Email"
            className="w-80 bg-slate-100 h-12 rounded-xl px-3 md:w-[300px] sm:w-full"
            value={form.Email}
            onChange={handleChange}
            required
            />
            </label>
          </div>
          <label 
          className="text-[20px] font-serif font-semibold flex flex-col gap-5 my-10"
          htmlFor="title">
            Subject
          <input 
          type="text" 
          placeholder="what is the thing"
          name="title"
          className="w-[500px] bg-slate-100 h-12 rounded-xl px-3 sm:w-full"
          value={form.title}
          onChange={handleChange}
          required
          />
          </label>
          <label 
          className="text-[20px] font-serif font-semibold flex flex-col gap-5 my-10"
          htmlFor="desc">
            Description
            <textarea 
             name="description"
             placeholder="Explain in detail" 
             value={form.description}
             onChange={handleChange}
             cols="30" 
             rows='10'
             maxLength={1000}
             required
             className="w-[500px] bg-slate-100 h-32 rounded-xl px-3 py-3 sm:w-full"
             />
          </label>
          <input 
          type="submit" 
          value='Submit'
          className="bg-green-300/50 px-5 py-3 rounded-2xl flex justify-center cursor-pointer hover:bg-slate-200 sm:w-full sm:items-center sm:justify-center"
          />
        </form>
        <img 
        src="online2.png" 
        alt="EITA"
        className="w-96 h-96 my-32 rounded-full md:self-center sm:hidden" 
        />
       </div>
    </div>
  )
}

export default Contacts