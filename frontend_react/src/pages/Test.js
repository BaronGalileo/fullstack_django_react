import { useParams } from "react-router-dom";

function Test() {
    const {id} = useParams()
    // const [recipes, setRecipes] = useState(null)
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000').then(res => {
    //         setRecipes(res.data)
    //     })
    // }, [])



    
    return(
        <>
        
        <div>Test{id}</div>
        </>  
    )
}

export default Test