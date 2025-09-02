import React, { useState } from "react";

export default function Textform(props) {

    const handleUpClick = () => {
        console.log("clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (Event) => {
        setText(Event.target.value);
    }

    const handleLoClick = () => {
        let newtext = text.toLocaleLowerCase();
        setText(newtext);
    }

    //clear text
    const handleClearClick = () => {
        let clear = "";
        setText(clear);
    }

    //copy text
    const handleCopy = () => {
        console.log("copy")
        var copy = document.getElementById("myBox");
        copy.select();
        navigator.clipboard.writeText(copy.value);
    }

    //remove space
    const handleSpace = () => {
        let space = text.split(/[ ]+/);
        setText(space.join(" "));
    }
    const [text, setText] = useState("")

    return (
        <>
            <div className="textform">
                <h1>Enter your Text</h1>
                <textarea className="text" value={text} row="8" onChange={handleOnChange} id="myBox"></textarea><br></br>
                <button className="btn" onClick={handleUpClick}>ToUpperCase</button>
                <button onClick={handleLoClick} className="btn">ToLowerCase</button>
                <button onClick={handleClearClick} className="btn">ClearText</button>
                <button onClick={handleCopy} className="btn">Copy Text</button>
                <button onClick={handleSpace} className="btn">Remove Space</button>
                <div className="container">
                    <h1>Your text Summary</h1>
                    <p>{text.split(" ").filter((element) => { return element.length != 0 }).length}words {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes Read</p>
                </div>
            </div>
        </>
    )
}