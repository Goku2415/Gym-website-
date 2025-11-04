// import { Calculator } from 'lucide-react'/;
import React,{useState} from 'react'
import { toast } from 'react-toastify';

const BmiCalculator = () => {
  const [height,setHeight]= useState("");
  const [weight,setWeight]= useState("");
  const [gender, setGender]= useState("");
  const [bmi, setBmi]= useState("");


  const CalculatorBMI =(e)=>{
    e.preventDefault();
    if(!height || !weight || !gender){
      toast.error("please enter valid height, weight and gender.");
      return;
    }
    const heightInMeters = height/100;
    const bmiValue = (weight/(heightInMeters*heightInMeters)).toFixed(2);
    setBmi(bmiValue);


    if(bmiValue<18.5){
      toast.warning("You are underweight.consider seeking advice form a healthcare");
    }
    else if(bmiValue>=18.5 && bmiValue<24.9){
      toast.success(
      "you have normal value, well done!"
      );
    }
    else if(bmiValue>=25 && bmiValue<29.9){
      toast.warning("You are overweight, go for run u lazy bastard");
    }
    else{
      toast.error("you are in the obese range. marega bete tu jldi, cremation ki tayari krle bol ghar walo se"
      );
    }
  };

  return (
    <section className='bmi'>
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={CalculatorBMI}>
            <div>
              <label> Height (cm)</label>
              <input type="number" value={height} onChange={(e)=> setHeight(e.target.value)}
              required
              />
            </div>
            <div>
              <label> Weight (kg)</label>
              <input 
              type="number" 
              value={weight} 
              onChange={(e)=> setWeight(e.target.value)}
              required
              />
            </div>
            <div>
              <label> Gender</label>
              <select 
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                </select>
            </div>

            <button type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmiImage" />

        </div>

      </div>

    </section>
  )
}

export default BmiCalculator
