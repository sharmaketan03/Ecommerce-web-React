import { useState } from "react"

// let array=[]
function Contact() {
    const [formdata,setformdata]=useState({
         name:"",
         email:"",
         Phonenumber:"",
         textarea:""

    })

   const [save,setSavedData] =useState({})

    function handel(e){
        
        const {name,value} =e.target
         setformdata({...formdata,[name]:value})
        
       
        
        }
    function handleSubmit(e){
            e.preventDefault()
            setSavedData({...formdata})
            // console.log(save)
    }

  return (
    <>
     <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name"  placeholder="Enter Your Name" value={formdata.name} onChange={handel}/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter Your E-mail"  value={formdata.email} onChange={handel}/>
          <label htmlFor="phonenumber">Phone Number</label>
          <input type="text" name="Phonenumber" id="phonenumber" placeholder="Enter Your Number"  value={formdata.Phonenumber} onChange={handel}/>
          <textarea name="textarea" id="" vlaue={formdata.textarea} onChange={handel} placeholder="Enter Your Text Message"></textarea>
          <button  type="sumbit">sumbit</button>
     </form>
     <ul>
        <li>{save.name}</li>
        <li>{save.email}</li>
        <li>{save.Phonenumber}</li>
        <li>{save.textarea}</li>
     </ul>
    </>
  )
}

export default Contact