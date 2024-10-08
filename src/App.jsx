

import { useState, useEffect } from 'react';
import CustomAlert from './CustomAlert ';
import './App.css';
import {
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  FacebookShareCount,
  FacebookShareButton, 
} from "react-share";
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [loc, setLoc] = useState(0);
  const [loc2, setLoc2] = useState(0);
  const[y,sety]=useState(false);
  console.log(y)
  const handleyes=()=>{
    console.log('yes click')
    if((window.innerWidth>=600) && (loc===200 && loc2===830)){
      sety(true);
      
      setAlertVisible(true);
    }
    else{
      if( (window.innerWidth <= 600) && (loc===203 && loc2===250)){
        sety(true);
      
        setAlertVisible(true);
      }
      else{
        sety(false);
        setAlertVisible(true);
      }
    }
 
    console.log(y);
}
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
    {/* <div>   <a href='https://nageshweb.netlify.app/' target='_blank'>
    <span className="date text-danger fw-bold  fs-6 m-3">{new Date().getFullYear()}@Nagesh_Kushwaha</span></a> </div> */}
      <div className="container c d-flex flex-column">   
        <main className="d-flex justify-content-center mt-5 pt-5">
    
          <h2 className="mt-4 fw-bold me-2">Do you Love me</h2>
          <img src="/images/hhh.png" alt="heart" className="kk img-fluid" />
        </main>
        <section className="ans d-flex justify-content-between">
          <button className="btn btn-success" onClick={()=>handleyes()}>Yes</button>
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
        <CustomAlert message="I Love You too Jaan, Mele Babu"  yes={y} onClose={() => setAlertVisible(false)} />
      )}
      <div className='social d-flex '>
      
      <div> <h2 className='fs-3 fw-bold me-3 mt-1'>Share By </h2></div>
      
      <WhatsappShareButton url={"https://hellolove.vercel.app/"}>
      <WhatsappIcon size={52} round={true} />
        {count => <span>{count} shares</span>}
       </WhatsappShareButton>
       <FacebookShareButton className='ms-1'
     url={"https://hellolove.vercel.app/"}     //eg. https://www.example.com
     quotes={"Hello_Love"}  //"Your Quotes"
     hashtag={"#Love"} // #hashTag
   >
    <FacebookIcon round={true} size={52} />
  </FacebookShareButton> 
      </div>
      <div>   <a href='https://nageshwebcode.netlify.app' target='_blank'>
      <span className="date text-dark fw-bold  fs-6 m-3">{new Date().getFullYear()}@Nagesh_Kushwaha</span></a> </div>
     
  
      
    </>
  );
}

export default App;
