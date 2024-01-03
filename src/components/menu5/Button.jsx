import React, { useState } from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import '../menu5/Button.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Button = () => {
  
      const [isPurchased, setIsPurchased] = useState(false);
    
      const handlePurchaseClick = () => {
        setIsPurchased(true);
    
        // Simulate a delay and then reset to "PREORDER" state
        setTimeout(() => {
          setIsPurchased(false);
        }, 3000);
  };
  

  //TOAST

  const customToastClass = {
    fontSize: '3rem',  // Adjust the font size as needed
   
  };
  const notify = () =>toast.success(' SENT!', {
    position: "top-right",
      
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    className: 'custom-toast', // Assign the custom class
    style: customToastClass,   // Apply the custom styles
    })

    return (
    <div><button
    onClick={() => {
      handlePurchaseClick();
      notify();
    }}
    className='btn'
  >
    {isPurchased ? (
      <a className='sent'>
        Sent <IoIosCheckmarkCircleOutline className='sentbtn' />
      </a>
    ) : (
      <a className='send'>
        Send Message
      </a>
    )}
      </button>
        <ToastContainer />
      </div>
  )
}

export default Button