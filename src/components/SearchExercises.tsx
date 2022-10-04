import React, { useState, useEffect} from 'react'
import { exerciseOptions, fetchData } from "../utils/fetchData"
import Exercises from './Exercises'

const SearchExercises = () => {

    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([])
    const [bodyParts, setBodyParts] = useState([]) as any

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData(new URL('https://exercisedb.p.rapidapi.com/exercises/bodyPartList'), exerciseOptions)
            setBodyParts(["all", ...bodyPartsData])
        }
        fetchExercisesData()
    }, [])

    const startQuery = async (term : String) => {
        term = search
        if(term){
          const exerciseData = await fetchData(new URL('https://exercisedb.p.rapidapi.com/exercises'), exerciseOptions)
          const searchedExercises = exerciseData.filter((el : any) => 
            el.name.toLowerCase().includes(search) ||
            el.target.toLowerCase().includes(search) ||
            el.equipment.toLowerCase().includes(search) ||
            el.bodyPart.toLowerCase().includes(search))

            console.log(searchedExercises)
            setSearch("")
            setExercises(searchedExercises)
        }

    }

    const startQueryByCategory = async (term : String) => {
        if(term){
          const exerciseData = await fetchData(new URL('https://exercisedb.p.rapidapi.com/exercises'), exerciseOptions)
          const searchedExercises = exerciseData.filter((el : any) => 
            el.bodyPart.toLowerCase().includes(search))

            setExercises(searchedExercises)
        }

    }

  return (

    <div className='flex flex-col items-center justify-center p-4'>
        <h3 className='text-xl'> Search over 1000 gym tutorials</h3>
        <div className='m-4' >
            <label htmlFor='search'>Search exercise here : </label>
            <input className='border-2 border-black' id="seach" value={search} onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())} ></input>
            <button onClick={() => startQuery(search)} type="submit" className='p-2 bg-purple-600 mx-2 rounded-md text-white'>Search</button>
        </div>
        <div className='flex flex-row space-x-6 justify-center items-center underline p-4 mb-6'>
            {bodyParts.map( (element: String) => (
                <button onClick={() => startQueryByCategory(element)} className="p-2 bg-gray-200 rounded-md border-2 border-gray-800">
                    {element}
                </button>
            ))}
        </div>
        <Exercises data={exercises} />
    </div>
  )
}

export default SearchExercises