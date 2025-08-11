import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Bodycalculator = () => {
  const [height,setheight]=useState("");
  const [weight,setweight]=useState("");
  const [gender,setgender]=useState("");
  const [bmi,setbmi]=useState("");
  
  const calculatebmi = (e)=>{
    e.preventDefault();
    if(!height || !weight || !gender){
      toast.error("Please enter a valid height,weight and gender.");
      return;
    }
    const heightinmeters=height/100;
    const bmivalue=(weight/(heightinmeters*heightinmeters)).toFixed(2);

    if(bmivalue<18.5){
      toast.warning("You are underweigt.Consider seeking advice from healthcare provider.")
    }
    else if(bmivalue >=18.5 && bmivalue<24.9){
      toast.success(
        "You have normal weight.Keep maintaining a healthy lifestyle."
      )
    }
    else if(bmivalue >=25 && bmivalue<29.9){
      toast.warning(
        "You have overweight.Consider seeking advice from healthcare provider."
      )
    }
    else {
      toast.error(
        "You are in obese range.It is recommended to seek advice from professionals."
      )
    }
  
  
  }
  return (
    <section className='bmi'>
      <h1>BMI CALCULATOR</h1>
      <div className='container'>
        <div className='wrapper'> 
          <form onSubmit={calculatebmi}>
            <div>
              <label>Height (cm)</label>
              <input 
                type="number"
                value={height}
                onChange={(e)=>setheight(e.target.value)}
                required />
            </div>

            <div>
              <label>Weight (Kg)</label>
              <input 
                type="number"
                value={weight}
                onChange={(e)=>setweight(e.target.value)}
                required />
            </div>

            <div>
              <label>Gender</label>
              <select 
                value={gender}
                onChange={(e)=>setgender(e.target.value)}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className='wrapper'>
          <img src="/bmi.jpg" alt="bmiImage"/>
        </div>

      </div>

    </section>
  )
}

export default Bodycalculator