import * as React from 'react';
import './style.css';
import {useState} from 'react';

export default function App() {
  const[text,showtext]=useState(true);

  return (
    <div>
      <button onClick={()=>{showtext(!text)}}>Show/Hide</button>
      {text && <p>Click to see some magic happen :)</p>}
    </div>
  );
}



// const[text,showtext]=useState(true);
//   let handlecontent=()=>{
//     showtext(!text)
//   }
//   return (
//     <div>
//       <button onClick={handlecontent}>Show/Hide</button>
//       {text && <p>Click to see some magic happen :)</p>}
//     </div>
//   );
