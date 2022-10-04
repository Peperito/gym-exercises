import React from 'react'

const Detail = ({ exerciseDetail }: any) => {

  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

  console.log(bodyPart)

  return (
    <div className='flex flex-col w-full m-auto items-center'>
      <div className='flex flex-row items-center border-2 border-black p-4 rounded-md'>
        <h2 className='text-2xl font-bold'>{name}</h2>
        <img src={gifUrl} alt="gif description" />
      </div>

      <p className='text-xl mt-6'> This exercise will target your <b>{target}</b></p>
      <p className='text-xl mt-6'> <b>{equipment}</b> needed to perform this exercise </p>
    </div>
  )
}

export default Detail