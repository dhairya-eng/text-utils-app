import React, { useState } from 'react'

function TextForm(props) {
    const[text,settext]=useState("enter the text");
    function handlechange(){
        let newtext=text.toUpperCase();
        settext(newtext);
        props.showalert("convert to uppercase","success");
    }
    function handlelochange(){
        let newtext=text.toLowerCase();
        settext(newtext);
    }
    function handlecapital(){
        let newtext=text.charAt(0).toUpperCase()+text.slice(1);
        settext(newtext);
    }
    function textchange(e){
        settext(e.target.value);
    }
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'grey':'black'}}>
      <h1>{props.head}</h1>
      <div className="mb-3">
     <textarea className="form-control" value={text} onChange={textchange}
     style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="exampleFormControlTextarea1" rows="3"></textarea>
     </div>
      <button onClick={handlechange}>Convert to uppercase</button>
      <button onClick={handlelochange}>Convert to Lowercase</button>
      <button onClick={handlecapital}>Convert to Capital</button>
        </div>
       <div className="container" style={{color:props.mode==='dark'?'grey':'black'}}>
          <h1>Text Summary</h1>
          <p>{text.split(" ").length} Words {text.length} characters</p>
          <p>Preview</p>
          <p>{text.length>0?text:"enter something to preview"}</p>
     </div>  
        </>
    )
}

export default TextForm
