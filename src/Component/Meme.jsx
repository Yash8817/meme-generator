import React from "react";
// import memeData from "../memeData";

function Meme()
{   

    const [ memeImage, setMemeImage ]   = React.useState('')
    const [meme,setmeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage:memeImage
    })
    
    const [allMemeImage, setAllMemeImage]= React.useState([])

    React.useEffect(()=>{
            fetch("https:api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImage(data.data.memese))
    },[])
 
    
    function getMemeImage()
    {
        const memesArray =  allMemeImage;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        
        const url = memesArray[randomNumber].url
        setmeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))

    }

    function handleChange(event){
        const{name, value} = event.target
        setmeme(prevmeme => ({
            ...prevmeme,
            [name]: value
        })
        )

    }
    

    return(
        <main>
            <div className="form">
                <input 
                type='text' 
                className="form--input" 
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input 
                type='text' 
                className="form--input"
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image </button>
            </div>
                <div className="meme">
                <img src={meme.randomImage} alt="image not found" className="meme--image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>

        </main>
    )
}

export default Meme;