import React from 'react'
import { Spinner } from 'react-bootstrap'


const LoadingScreen = () => {
    return (
        <div>
              <Spinner className="align-item-center" animation="border" variant="info" />
            
        </div>
    )
}

export default LoadingScreen
