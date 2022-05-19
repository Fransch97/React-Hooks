import "../css/main.css"
import {useState} from "react"
export default function Main(main){
    const [valore, setValue] = useState(0)
    function incremento(){
        setValue(valore + 1)
    }
    function decremento(){
        setValue(valore - 1)
    }
    return(
        <main>
            <h1>{main.main}</h1>
            <p>Sperimentiamo gli hooks</p>
            <button onClick={()=>{incremento()}}>Inscrementa</button>
            <button onClick={()=>{decremento()}}>Decrementa</button>
            <p>{valore}</p>
        </main>
    )
}