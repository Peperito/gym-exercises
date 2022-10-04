import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import Detail from "../components/Detail"
import Navbar from "../components/Navbar"
import SimilarExercises from "../components/SimilarExercises"
import { exerciseOptions, fetchData } from "../utils/fetchData"

const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({})
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchExercisesData = async () =>{
            const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

            const exerciseDetailData = await fetchData(new URL(`${exerciseDbUrl}/exercises/exercise/${id}`), exerciseOptions);

            const targetMuscleExercisesData = await fetchData(new URL(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`), exerciseOptions);

            setExerciseDetail(exerciseDetailData)
            setTargetMuscleExercises(targetMuscleExercisesData)
        }
        fetchExercisesData();
    }, [id])

    return (
        <>
        <div className="flex flex-col">
            <Detail exerciseDetail={exerciseDetail} />
            <SimilarExercises exercises={targetMuscleExercises} />
        </div>
        </>
    )
}

export default ExerciseDetail