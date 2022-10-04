import React, {useState} from 'react'
import { exerciseOptions } from '../utils/fetchData'
import { Link } from 'react-router-dom'

const Exercises = ({data}: any) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;

  const totalPages: number[] = Array(Math.ceil(data.length / exercisesPerPage))
  for(let i = 1; i < totalPages.length; i++){
    totalPages[i] = i
  }

  const indexOfLastExercise= currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = data.slice(indexOfFirstExercise, indexOfLastExercise);

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <>
    <div className='grid grid-cols-4 items-center'>
      {currentExercises.map((exercise: any, index: any) => (
        <Link to={`/exercises/${exercise.id}`} >
        <div className='flex flex-col m-4 border-2 border-black rounded-md'>
          <p className='font-bold m-2'>{exercise.name}</p>
          <p className='mx-2'> Required Equipment : {exercise.equipment}</p>
          <img src={exercise.gifUrl} alt="exercice-desc"/>
          <div className='flex gap-3'>
            <p className='p-2 bg-green-600 ml-4 my-2 rounded-md text-white'> {exercise.bodyPart} </p>
            <p className='p-2 bg-red-600 my-2 rounded-md text-white'> {exercise.target} </p>
        </div>
          </div>
        </Link>
      ))}
    </div>
    {data.length > 10 && (
      <div className='flex flex-row mt-4 items-center'>
        <button className='p-2 border-2 border-black' onClick={paginateBack}> - </button>
          {totalPages.map(el => (
            <p className={` cursor-pointer p-1 border-1 border-black ${el === currentPage ? 'font-bold' : ''}`} onClick={() =>setCurrentPage(el)}>{el}</p>
          ))}
        <button className='p-2 border-2 border-black' onClick={paginateFront}> + </button>
      </div>
    )}
      </>
  )
}

export default Exercises