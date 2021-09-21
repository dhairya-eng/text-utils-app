import React from 'react'

function Alert(props) {
    const Capital=(word)=>{
     const lo=word.toLowerCase();
     return  lo.charAt(0).toUpperCase()+lo.slice(1);
    }
    return (
     
           props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{Capital(props.alert.type)}</strong>:{props.alert.msg}
            </div>
      
    )
}

export default Alert
