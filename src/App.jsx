import React, { useState, useEffect } from 'react'
import PacmanLoader from "react-spinners/PacmanLoader"; // Import PacmanLoader
import Header from './components/header/Header'
import Navsocials from './components/navsocials/Navsocials'
import Menu from './components/menu/Menu'
import Menu2 from './components/menu2/Menu2'
import Menu3 from './components/menu3/Menu3'
import Menu4 from './components/menu4/Menu4'
import Menu5 from './components/menu5/Menu5'
import Footer from './components/zfooter/Footer'


const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  // Define color and override variables
  const color = "red"; // Set your desired color value here
  const loaderContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh", // This will make sure the container takes up the whole viewport height
  };
  
  return (

<>
      {loading ? (
        <div style={loaderContainerStyle}>
          <PacmanLoader
            color={color}
            loading={loading}
            size={50} // Adjust the size according to your preference
            aria-label="Loading Spinner"
            data-testid="loader"
/></div>
      ) : (

      <>
      
      <Header />
      <Menu />
      <Navsocials />
      
      <Menu2 />

      <Menu3 />

      <Menu4 />
      <Menu5 />
      <Footer/>
          </>
           )}
           </>
         );
       };
  


export default App