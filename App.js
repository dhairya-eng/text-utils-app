
import './App.css';
import React, { useState } from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import{ BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from "react-router-dom"; 
function App() {
  const[mode,setmode]=useState("light");
  const [alert, setalert] = useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
         setalert(null);
    },3000);
  }
  const toggle=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="grey"
      showalert("enable dark mode","success");
    }else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("enable light mode","success");
    }
  }
  return (
 
    <div className="App">
     <Router>
     <Navbar mode={mode} toggle={toggle}/>
     <Alert alert={alert}/>
     <div className="container">
       <Switch>
         <Route exact path='/About'>
           <About/>
           </Route>
           <Route exact path="/">
              <TextForm showalert={showalert} head="enter the text" modr={mode}/>
            </Route>
      </Switch>
     </div>
     </Router>
    </div>
   
    
  );
}

export default App;
