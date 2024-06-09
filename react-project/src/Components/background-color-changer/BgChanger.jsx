import React, {useState} from 'react'

function BgChanger() {
    const [color, setColor] = useState("white")
    document.getElementsByTagName("body")[0].style.background = color
  
    return (
      <div className='buttonContainer'>
              <center>
              <button onClick={()=>setColor('red')} style={{color:"white", background:"red"}}>Red</button>
              <button onClick={()=>setColor('green')} style={{color:"white", background:"green"}}>Green</button>
              <button onClick={()=>setColor('blue')} style={{color:"white", background:"blue"}}>Blue</button>
              <button onClick={()=>setColor('olive')} style={{color:"white", background:"olive"}}>Olive</button>
              <button onClick={()=>setColor('gray')} style={{color:"white", background:"gray"}}>Gray</button>
              <button onClick={()=>setColor('yellow')} style={{color:"white", background:"yellow"}}>Yellow</button>
              <button onClick={()=>setColor('pink')} style={{color:"white", background:"pink"}}>Pink</button>
              <button onClick={()=>setColor('purple')} style={{color:"white", background:"purple"}}>Purple</button>
              <button onClick={()=>setColor('lavender')} style={{color:"white", background:"lavender"}}>Lavender</button>
              <button onClick={()=>setColor('white')} style={{color:"black", background:"white"}}>White</button>
              <button onClick={()=>setColor('black')} style={{color:"white", background:"black"}}>Black</button>
              </center>
          </div>
    );
  
}

export default BgChanger