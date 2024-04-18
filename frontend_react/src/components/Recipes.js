import React from "react";


function Recipes(props) {

    // console.log("props", props.recipesByCategory[props.cat][props.cat].title)
    if(Object.keys(props).length !== 0){
        console.log("props", props.recipesByCategory)
        console.log("ДФФФФ")
        return (
  
            <div>
                <h1>{props.cat}</h1>
                {/* <p>{props.recipesByCategory[props.cat][props.cat].title[1]}</p> */}
            </div>
        )
    }
    else{ console.log("HHHHW")}




    
    return(
        <>
        <div>Рецепты</div>
        {/* debuger
        if(Object.keys(props.recipesByCategory).length != 0){props.recipesByCategory.map(value => {
            console.log("value")
            return (
                <div key={value}>ПРивета</div>
            )
        })} */}
        
      </>  
    )
}

export default Recipes