import React from "react";
import memeData from "../memeData";

function Meme()
{

    const [ memeImage, setMemeImage ]   = React.useState('')
    const [meme,setmeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage:memeImage
    })
    
    const [allMemeImage, setAllMemeImage]= React.useState(memeData)
 
    
    function getMemeImage()
    {
        const memesArray =  allMemeImage.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        
        const url = memesArray[randomNumber].url
        setmeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))

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
                <img src={meme.randomImage} alt="image not found" className="meme--image" />
            </div>
        </main>
    )
}

export default Meme;