import { useCallback, useState } from "react"
import Cards from "./Cards"


const Container = () => {
    const[count,setCount] = useState(0)
// la fonction useCallback permet de memoriser une fonction et eviter de la recreer a chaque fois
const customLog = useCallback(() => {
    console.log("Bonjour")
},[])
//   function customLog() {
//         console.log("bonjour")
//     }
  return (
    <div>
        <Cards txt={"text"} customi={customLog}/>
        <button onClick={()=> setCount(count + 1)}>Incr</button>
    </div>
  )
}
export default Container