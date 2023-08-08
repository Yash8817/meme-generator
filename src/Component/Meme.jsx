import React from "react";
import memeData from "../memeData";

function Meme()
{
    const [ memeImage, setMemeImage ]   = React.useState('')
    let url
    function getMemeImage()
    {
        const memesArray =  memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)

        setMemeImage(memesArray[randomNumber].url)

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
                <img src={memeImage} alt="image not found" className="meme--image" />
            </div>
        </main>
    )
}

export default Meme;