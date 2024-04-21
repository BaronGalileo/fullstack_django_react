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
        <>
        <h1>Дом, милый Дом!</h1>
        {cats.map(cat => {
            return(
            <div>
                <Link key={cat.id} to={`cat/${cat.name}`}>
                    {cat.name}
                </Link>
            </div>
            )
        })}
        </>  
    )
}

export default Home