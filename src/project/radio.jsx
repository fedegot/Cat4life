// Application name	API music test
// API key	20952bc86d0cff33cfe62d475744a5e8
// Shared secret	cf4ce886d7b13dc6fd06e19413efdf05
// Registered to	fedegot


//http://jsonviewer.stack.hu/#http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=20952bc86d0cff33cfe62d475744a5e8&format=json

import { useEffect, useState  } from "react"
import "../App.css";

const Radio =() =>{

    const [data, setData] = useState("")

    const handleFetch = async () =>{
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=20952bc86d0cff33cfe62d475744a5e8&format=json`)
        const data = await response.json()
        const let1= data.tracks.track
        const mam2 = let1.map(function(e) {
        return e.name
        })
        console.log(mam2)
        //console.log(let1[0].name)
        //console.log(data.tracks.track)

        //data.map(x =>console.log(x.name))
    //    const names = data.map()
        // setData(data)
       
        //  const mat = Object.entries(data.tracks.track)
        //  console.log(mat)


        // for (const [key , value] of Object.entries(data.tracks.track)){
        //     console.log(`key: ${key}, value: ${value}`)
        // }
        
    }



    return (
        <div>
            
            {/* //check if data fact it exist if does return data.fact */}
            
            <button onClick = {handleFetch}>click</button>
            <p></p>

            


        </div>
    )
}


export default Radio