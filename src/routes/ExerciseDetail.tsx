import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import Detail from "../components/Detail"
import Navbar from "../components/Navbar"
import ExerciseVideo from "../components/ExerciseVideo"
import SimilarExercises from "../components/SimilarExercises"
import { exerciseOptions, fetchData } from "../utils/fetchData"

const ExerciseDetail = () => {

    return (
        <>
        <Navbar />
        <div className="flex flex-col">
            <Detail />
            <ExerciseVideo />
            <SimilarExercises />
        </div>
        </>
    )
}

export default ExerciseDetail