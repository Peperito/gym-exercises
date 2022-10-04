import React from 'react'

const HeroBanner = () => {
  return (
    <div className='flex flex-row items-center m-auto  border-y-2 border-black w-full justify-center'>
        
        <div className='flex flex-col items-center'>
            <h2 className='text-4xl font-extrabold text-blue-700'> Find your Gym Exercises</h2>
            <h2 className='text-xl font-bold'> Hundreds of different gym exercises</h2>
        
            <button className='p-4 bg-purple-600 rounded-md m-8 text-white font-bold shadow-md'>
                Explore Exercises
            </button>
        </div>

        <div>
            <img src="peted.jpg" alt="toutpete" />
        </div>
    </div>
  )
}

export default HeroBanner