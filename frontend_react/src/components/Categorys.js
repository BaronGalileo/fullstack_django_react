import React, { useState } from "react";
import axios from "axios";
import Recipes from "./Recipes";

function Categorys(props) {
    const path = "http://127.0.0.1:8000/cat"
    const [categorys, setCategorys] = useState()
    const [recipesByCategory, setRecipesByCategory] = useState({})
    const [cat, setCat] = useState()

    if(!categorys){axios.get(path).then(res =>{
        setCategorys(res.data)
        console.log(res.data)
    })}

    function newDataCategorys(key, val) {
        setCat(key)
        setRecipesByCategory({
            ...recipesByCategory,
            [key] : val })
        }

    function show(e) {
        const my_cat = e.target.name
        debugger
        const arr_for_map = {}
        const my_arr = {}
    
        props.data.map((value, index) => {         

            if(value.cat.name === cat){   
                arr_for_map[index] = value
                return arr_for_map
            }                 
        })
        my_arr[my_cat] = arr_for_map
        newDataCategorys(my_cat, my_arr)
    }



    
    return(
        <>
        {categorys &&
            categorys.map(value => {

                return(
                <>
                  <div >{value.name}</div>
                  <button name={value.name} onClick={show}>{value.name}</button>
                </>
                )
              })
        }
        <Recipes recipesByCategory={recipesByCategory} cat={cat}/>
      </>  
    )
}

export default Categorys