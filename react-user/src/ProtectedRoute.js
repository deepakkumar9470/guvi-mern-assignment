import React from 'react'
import {Navigate,Route} from 'react-router-dom'


const ProtectedRoute = ({auth, component : Component, ...rest}) => {
    return (
        <div>
              
               <Route {...rest} render ={(props)=>{
                   if(auth) {
                       <Component {...props} />

                   }
                   if(!auth){
                       <Navigate to= {{path : '/', state: {
                           from :props.location
                       }}} />
                   }
               }} >


               </Route>

        </div>
    )
}

export default ProtectedRoute
