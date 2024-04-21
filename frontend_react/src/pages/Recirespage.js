import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function Recipes() {
    const {id} = useParams()
    const [recipe, setRecipe] = useState(null)
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/recipes/${id}`).then(res => {
            
            setRecipe(res.data)
        })
    }, [])

    return (
        <div>
        {recipe&& 
        <>
            <h1>{recipe.title}</h1>
            <p>{recipe.content}</p>
        </>}
        </div>
    )




}

export default Recipes