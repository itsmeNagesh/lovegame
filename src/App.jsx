import { useState } from 'react'
import CustomAlert from './CustomAlert ';
import './App.css'

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const[loc,setloc]=useState(178);
    const[loc2,setloc2]=useState(830);
    const handle=()=>{
      if (window.innerWidth <= 600) {
       
        alert('600')
      
      }
     console.log(loc,'loc')
     console.log(loc2)
        let location=Math.floor(Math.random()*200);
        let location2=Math.floor(Math.random()*300);
        setloc(location); setloc2(location2)
      
        console.log(loc2,'loc')
// console.log(location)
// console.log(location2)
    }
    const showAlert = () => {
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 3000); // Automatically close the alert after 3 seconds
    };
  return (
    <>
     <div className="container d-flex flex-column  ">
      <main className='d-flex justify-content-center mt-5'> 
         <h2 className='mt-4 fw-bold me-2 '>Do you Love me</h2>
      <img src='/images/hhh.png' alt='heart' className='kk img-fluid '/>
      </main>
      <section className=' ans d-flex justify-content-between '>  <button className='btn btn-success' onClick={showAlert}>Yes</button>

        <button className='btn btn-danger'style={{position:"absolute" , top:`${loc}px`,left:`${loc2}px`}} onMouseOver={()=>handle()}>No</button>
      </section>
  
    
     </div>   {alertVisible && <CustomAlert message="I Love You too Jaan mere babu " onClose={() => setAlertVisible(false)} />}
    </>
  )
}

export default App
