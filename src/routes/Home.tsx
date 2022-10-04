import React, {useState} from "react"
import HeroBanner from "../components/HeroBanner"
import SearchExercises from "../components/SearchExercises"


const Home = () => {
    return (

        <div className="flex flex-col">
            <HeroBanner />
            <SearchExercises />
        </div>
        
    )
}

export default Home
