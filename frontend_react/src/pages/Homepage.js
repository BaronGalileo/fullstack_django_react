import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Home() {
    const [cats, setCats] = useState([]);
    const path = "http://127.0.0.1:8000/api/v1/cat"
    useEffect(() => {
        axios.get(path).then(res => {
            setCats(res.data)
            

        })
    }, [])



    
    return(
        <div>
            <h1>Категории блюд</h1>
            <div className="conteyner">
                {cats.map(cat => {
                    return(
                    <div className="element">
                        <Link key={cat.id} to={`cat/${cat.name}`}>
                            <h2>{cat.name}</h2>
                        </Link>
                    </div>
                    )
                })}
            </div>
        </div>  
    )
}

export default Home