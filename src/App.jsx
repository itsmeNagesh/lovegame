// import { useState } from 'react'
// import CustomAlert from './CustomAlert ';
// import './App.css'

// function App() {
//   const [alertVisible, setAlertVisible] = useState(false);

//   const[loc,setloc]=useState(178);
//     const[loc2,setloc2]=useState(830);
//     const handle=()=>{
//       if (window.innerWidth <= 600) {
//         setloc(100)
//         setloc2(100)
      
//       }
//      console.log(loc,'loc')
//      console.log(loc2)
//         let location=Math.floor(Math.random()*200);
//         let location2=Math.floor(Math.random()*300);
//         setloc(location); setloc2(location2)
      

//     }
//     const showAlert = () => {
//       setAlertVisible(true);
//       setTimeout(() => {
//         setAlertVisible(false);
//       }, 3000); // Automatically close the alert after 3 seconds
//     };
//   return (
//     <>
//      <div className="container c d-flex flex-column  ">
//       <main className='d-flex justify-content-center mt-5'> 
//          <h2 className='mt-4 fw-bold me-2 '>Do you Love me</h2>
//       <img src='/images/hhh.png' alt='heart' className='kk img-fluid '/>
//       </main>
//       <section className=' ans d-flex justify-content-between '>  <button className='btn btn-success' onClick={showAlert}>Yes</button>

//         <button className='btn btn-danger'style={{position:"absolute" , top:`${loc}px`,left:`${loc2}px`}} onMouseOver={()=>handle()}>No</button>
//       </section>
  
    
//      </div>   {alertVisible && <CustomAlert message="I Love You too Jaan mere babu " onClose={() => setAlertVisible(false)} />}
//     </>
//   )
// }

// export default App

import { useState, useEffect } from 'react';
import CustomAlert from './CustomAlert ';
import './App.css';

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [loc, setLoc] = useState(0);
  const [loc2, setLoc2] = useState(0);

  useEffect(() => {
    const setInitialPositions = () => {
      const initialLoc = window.innerWidth <= 600 ? 203 : 200;
      const initialLoc2 = window.innerWidth <= 600 ? 250 : 830;
      setLoc(initialLoc);
      setLoc2(initialLoc2);
    };

    setInitialPositions();
    window.addEventListener('resize', setInitialPositions);
    return () => {
      window.removeEventListener('resize', setInitialPositions);
    };
  }, []);

  const handleMoveButton = () => {
    const maxX = window.innerWidth <= 600 ? window.innerWidth - 150 : 200;
    const maxY = window.innerHeight <= 600 ? window.innerHeight - 198 : 300;
    const location = Math.floor(Math.random() * maxX);
    const location2 = Math.floor(Math.random() * maxY);
    setLoc(location);
    setLoc2(location2);
  };

  const showAlert = () => {
    setAlertVisible(true);
    // setTimeout(() => {
    //   setAlertVisible(false);
    // }, 3000); 
  };

  const handleTouch = (event) => {
    if (window.innerWidth <= 600) {
      handleMoveButton();
    }
  };

  console.log('top', loc, 'left', loc2);

  return (
    <>
    <div>    <span className="date text-danger fw-bold ">{new Date().getFullYear()}@Nagesh_Kushwaha</span></div>
      <div className="container c d-flex flex-column">   
        <main className="d-flex justify-content-center mt-5">
    
          <h2 className="mt-4 fw-bold me-2">Do you Love me</h2>
          <img src="/images/hhh.png" alt="heart" className="kk img-fluid" />
        </main>
        <section className="ans d-flex justify-content-between">
          <button className="btn btn-success" onClick={showAlert}>Yes</button>
          <button
            className="btn btn-danger"
            style={{ position: "absolute", top: `${loc}px`, left: `${loc2}px` }}
            onMouseOver={handleMoveButton}
            onTouchStart={handleTouch}
          >
            No
          </button>
        </section>
      </div>
      {alertVisible && (
        <CustomAlert message="I Love You too Jaan Mere Babu" onClose={() => setAlertVisible(false)} />
      )}
    </>
  );
}

export default App;
