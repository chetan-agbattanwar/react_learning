import React, { useState } from 'react' 

function BgChanger() {
    const [bgColor, setBgColor] = useState('white')
    document.getElementsByTagName('body')[0].style.backgroundColor = bgColor

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
    <button className='bg-black text-white rounded-md p-1 mr-1' onClick={()=>setBgColor('black')}>Black</button>
    <button className='bg-red-500 text-white rounded-md p-1 mr-1' onClick={()=>setBgColor('red')}>Red</button>
    <button className='bg-yellow-500 text-white rounded-md p-1 mr-1' onClick={()=>setBgColor('yellow')}>Yellow</button>
    <button className='bg-orange-500 text-white rounded-md p-1 mr-1' onClick={()=>setBgColor('orange')}>Orange</button>
    <button className='bg-blue-500 text-white rounded-md p-1 mr-1' onClick={()=>setBgColor('blue')}>Blue</button>
    <button className='bg-green-500 text-white rounded-md p-1 mr-1' onClick={()=>setBgColor('green')}>Green</button>
    <button className='bg-white text-black rounded-md p-1 mr-1' onClick={()=>setBgColor('white')}>White</button>
    <button className='bg-gray-500 text-white rounded-md p-1 mr-1' onClick={()=>setBgColor('gray')}>Gray</button>
    <button className='bg-purple-500 text-white rounded-md p-1 mr-1' onClick={()=>setBgColor('purple')}>Purple</button>

    </div>
  )
}

export default BgChanger