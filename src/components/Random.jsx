import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {
  
  
  const {gif,loading,fetchData} = useGif();

  function clickHandler(){
    fetchData();
  }

  return (
    <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[10px]">
      <h1 className="mt-[10px] text-2xl uppercase underline font-bold"> A Random GIF</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="450px"/>)
      }
      

      <button onClick={clickHandler} className="font-bold bg-yellow-500 w-11/12 rounded py-2 mb-[10px]">Generate Gif</button>
    </div>
  );
}
