import React from "react";
import memeData from "../memeData";

function Meme()
{

    let url
    function getMemeImage()
    {
        const memesArray =  memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)

        url = memesArray[randomNumber].url

    }

    return(
        <main>
            <div className="form">
                <input 
                type='text' 
                className="form--input" 
                placeholder="Top text"
                />
                <input 
                type='text' 
                className="form--input"
                placeholder="Bottom text"
                />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image </button>
            </div>
        </main>
    )
}

export default Meme;