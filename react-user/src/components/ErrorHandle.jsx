import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorHandle = ({variant="info",children}) => {
    return (
        
            <Alert variant={variant} style={{fontSize:16}}>
               <span>{children}</span>
           </Alert>
        
    )
}

export default ErrorHandle
