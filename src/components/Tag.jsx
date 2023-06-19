import { useEffect, useState } from "react"
import Spinner from "./Spinner";
import axios from "axios";
import useGif from "../hooks/useGif";



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {

 
  
  const [tag,setTag] = useState('');
  const {gif,loading,fetchData} = useGif(tag);

  

  function changeHandler(event){
    setTag(event.target.value);
  }

  function clickHandler(){
    fetchData(tag);
  }

  return(
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[10px]">
    <h1 className="mt-[10px] text-2xl uppercase underline font-bold"> A {tag} Random GIF</h1>

    {
      loading ? (<Spinner/>) : (<img src={gif} width="450px"/>)
    }
    
    <input className="w-8/12 rounded py-1 text-center mb-[4px] mt-[2px]" onChange={changeHandler} value={tag}/>

    <button onClick={clickHandler} className="font-bold bg-yellow-500 w-11/12 rounded py-2 mb-[10px]">Generate Gif</button>
  </div>
  )
}
