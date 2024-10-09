import { addDoc, collection } from "firebase/firestore";
import { useState } from "react"
import { database } from '../config/firebase'

const QiratCenter = () => {

  const [info, setInfo] = useState({})
  const [repeat, setRepeat] = useState(1)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
  
    setInfo(values => ({...values, [name]: value}))
  };

  const collectionRef = collection(database, 'Students')
  

 const submitted = (e) => {

     if(info.Parent_Name == "" || info.email == "" || info.PhoneNumber == "" || info.country == "" || info.region == "") {
      alert("Please fill all the fields")
      return
     }else {
       e.preventDefault()
       addDoc(collectionRef, info)
       .then((res)=>{
        alert('successfully registered', res.id)
        setRepeat(1)
       })
       .catch((err) => alert(err.message))
   
       document.getElementById("Form").reset()
   
       setInfo({
         Parent_Name: '',
         email: '',
         PhoneNumber: '',
         country: '',
         region: ''
       })
     }

    
 }

 const AdditionalChild = () => {
  setRepeat(repeat + 1)
 }

 const DecrementChild = () => {
  setRepeat(repeat - 1)
 }

  return (
    <div>
        <h1 className="text-center text-3xl font-serif font-semibold">Qirat Center</h1>
        <h3 className="text-[23px] font-serif font-semibold text-center mt-5">Students Information</h3>
        <div className="flex flex-row-reverse justify-evenly">
          <button
          onClick={AdditionalChild}
          className="bg-gray-300 px-3 rounded-xl w-fit h-fit py-1 text-[19px]">
            Add
          </button>
          <button
          onClick={DecrementChild}
          className="bg-gray-300 px-3 rounded-xl w-fit h-fit py-1 text-[19px]" 
          type="reset"
          disabled = {repeat == 1 ? true : false}
          >
            Reset
          </button>
        </div>
      <form 
      id="Form"
      onSubmit={submitted}
      className="mx-16 items-center flex flex-col gap-7 my-3">
        {Array(repeat).fill(null).map((_,index) => (
            <div 
            key={index}
            className="flex gap-20 bg-slate-400 p-3 rounded-xl">
            <label className="flex flex-col gap-5 text-[20px] font-serif">
              Full Name:
              <input 
              type="text" 
              placeholder="Child Name"
              name = {`Student${index + 1}`}
              value = {info[index] && info[index]?.Student}
              onChange={handleChange}
              required
              className="bg-gray-300 px-2 h-12 rounded-lg w-56 border-solid border-2"
              />
            </label>
            <label className="flex flex-col gap-5 text-[23px] font-serif">
              sex: 
              <label className="mx-10 sm:flex">
                M:
                <input 
                type="radio" 
                name={`sex${index + 1}`}
                onChange={handleChange}
                value='male'
                required
                />
              </label>
              <label className="mx-10 sm:flex">
                F:
                <input 
                type="radio" 
                name={`Sex${index + 1}`} 
                onChange={handleChange}
                value='female'
                required
                />
              </label>
            </label>
            </div>
        ))}
        <div 
        id="Parent_Form"
        className="flex flex-col gap-4">
        <h4 className="text-[23px] font-serif font-semibold text-center">Parents Informations</h4>
          <div className="flex gap-20 sm:flex-col sm:items-center sm:gap-5">
          <label className="flex flex-col gap-5 text-[20px] font-serif">
            Full Name:
            <input 
            type="text" 
            placeholder="Parent Name"
            name="Parent_Name"
            value={info.Parent_Name}
            onChange={handleChange}
            required
            className="bg-gray-300/50 px-2 h-12 rounded-lg w-72"
            />
          </label>
          <label className="flex flex-col gap-5 text-[20px] font-serif">
            Country:
            <input 
            type="text" 
            placeholder="Your country"
            className="bg-gray-300/50 px-2 h-12 rounded-lg w-72"
            name="country"
            value={info.country}
            onChange={handleChange}
            required
            />
          </label>
          </div>
          <div className="flex gap-20 my-5 sm:flex-col sm:items-center sm:gap-5 sm:my-3">
          <label className="flex flex-col gap-5 text-[20px] font-serif">
            Region:
            <input 
            type="text" 
            placeholder="Your region"
            className="bg-gray-300/50 px-2 h-12 rounded-lg w-72"
            name="region"
            value={info.region}
            onChange={handleChange}
            required
            />
          </label>
          <label className="flex flex-col gap-5 text-[20px] font-serif">
            Phone Number:
            <input 
            type="tel" 
            placeholder="Your Phone Number"
            className="bg-gray-300/50 px-2 h-12 rounded-lg w-72"
            name="PhoneNumber"
            value={info.PhoneNumber}
            onChange={handleChange}
            required
            />
          </label>
          </div>
          <label className="flex flex-col gap-5 text-[20px] font-serif self-center">
            Email:
            <input 
            type="email" 
            placeholder="your Email" 
            className="bg-gray-300/50 px-2 h-12 rounded-lg w-72"
            name="email"
            value={info.email}
            onChange={handleChange}
            required
            />
          </label>
          <input 
          type="submit" 
          value="Submit"
          className="bg-green-300 p-2.5 w-fit flex self-end rounded-xl cursor-pointer"
          />
      </div>
    </form>
  </div>
  )
}

export default QiratCenter