import { Link, useParams } from "react-router-dom";
import { useState,  useEffect } from "react";
import axios from "axios";


function Categorys() {
    const {name} = useParams()
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/v1/recipes").then(res => {
            setRecipes(res.data)

        })
    }, [])



    
    return(
        <>
        
        <h1>Рецепты по категории  {name}</h1>
        {recipes&&
        recipes.map(recipe => {
            if(recipe.cat.name === name){
                return(
                <div className="element">
                    <Link key={recipe.id} to={`recipe/${recipe.id}`}>
                        {recipe.title}
                    </Link>
                </div>
                )
            }

        })}
        </>  
    )
}

export default Categorys