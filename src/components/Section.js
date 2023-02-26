import Radium from 'radium';
import React from 'react';
import { useContext } from "react";
import { BgContext, DarkModeContext } from "../App";
import '../Tests/Test.css'

const Section = ({ id, settings, children }) => {
  const [bg, setBg] = useContext(BgContext);
  return (
    <div
      id={id}
      style={settings.style?.desktop}
      className={`${settings.className} ${bg}`}
    >
      {children}
    </div>
  );
};

export default Radium(Section);











































// import Radium from 'radium';
// import React from 'react';
// import { useContext } from "react";
// import { BgContext, DarkModeContext } from "../App";
// import { useState } from "react";
// import '../Tests/Test.css'

// const Section = ({ id, settings, children }) => {
//   const styles = {...settings.style.desktop}
//   const [desktop, setDesktop] = useState(styles)

//   styles.backgroundColor = '#eee'
//   setDesktop(...styles.backgroundColor);
//   console.log(desktop);
//   const style = {
//     // Adding media query...
//     '@media (max-width: 1400px)': {
//       ...settings.style?.desktop
//     },
//     '@media (max-width: 900px)': {
//       ...settings.style?.desktop
//     },
//     '@media (max-width: 600px)': {
//       ...settings.style?.mobile
//     },
    
//   };
//   const [bg, setBg] = useContext(BgContext);
//   const handleBgc = ()=>{

//   }
//   return (
//     <div
//       id={id}
//       style={style}
//       className={`${settings.className} ${bg}`}
//     >
//       <button onClick={()=>handleBgc()}>test</button>
//       {children}
//     </div>
//   );
// };

// export default Radium(Section);
