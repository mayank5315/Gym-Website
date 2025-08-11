import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import axios from "axios";


const Contact = () => {
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[message,setmessage]=useState("");
  const[loading,setloading]=useState(false);

  const sendMail= async (e)=>{
    e.preventDefault();
    setloading(true);
    try{
    const {data}=await axios.post(
      "http://localhost:4000/send/mail",
      {
        name,
        email,
        message,
      },
      {
        withCredentials:true,
        headers:{
          "Content-Type":"application/json"},
        }
    );
    setname("");
    setemail("");
    setmessage("");
    toast.success(data.message);
    setloading(false);
  } catch (error){
    setloading(false);
    toast.error(error.response.data.message);
  }
};
  
  return (
    <section className='contact'>
      <form onSubmit={sendMail}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input 
          type='text'
          value={name}
          onChange={(e)=>setname(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input 
            type='email'
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          />
        </div>
        <div>
          <label>Messsage</label>
          <input 
          type='text'
          value={message}
          onChange={(e)=>setmessage(e.target.value)}

          />
        </div>
        <button type='submit' disabled={loading} style={{display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"15px"}}>
          {loading && <ClipLoader size={20} color="white"/>}
          Send Message

        </button>

      </form>

    </section>
  )
}

export default Contact