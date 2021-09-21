import React, { useState } from 'react'

export default function About() {
    const[mystyle,setstyle]=useState({
        color:'',
        backgroundColor:''
    })
    const[btntext,setbtn]=useState("enable dark mode");
    const toogle=()=>{
        if(mystyle.color==""){
            setstyle({
                color:"white",
                backgroundColor:"black"
            })
            setbtn("enable light mode")
        }else{
            setstyle({
                color:"",
                backgroundColor:""
            })
            setbtn("enable dark mode")
        }
    }
    return (
        <div>
            <div className="alert alert-success" style={mystyle} role="alert">
              <h4 className="alert-heading">Well done!</h4>
             <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
             <hr></hr>
             <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
             </div>
             <div className="container">
                 <button class=" btn btn-primary" onClick={toogle}>{btntext}</button>
             </div>
        </div>
    )
}
