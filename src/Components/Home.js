import React,{useEffect,useState} from 'react'
import axios from 'axios';
 const Home=()=>
 {
    async function Loadimage(){
        let response=await axios.get("http://localhost:9000/book")
        console.log(response.data)
        imgdata=response.data.map((x)=> (
             <div className="serviceitem">
                <div className="image">
                <img src={x.image} alt="/"></img>
                
                </div>
                <div className="auther">
                   <p> {x.name}</p>
                   <p> {x.auther}</p>
                   <h3> {x.price}</h3>
                </div>
             </div>
             
        ))
        setdata(imgdata)
     }
     useEffect(Loadimage,[]);

     let [imgdata,setdata]=useState("")
     return(
     <div>
        {imgdata}
     </div>
     )
 }
 export default Home;