import React, { useEffect } from 'react'
import { AlertIcon, Alert } from '@chakra-ui/react';

const AlertMsg = ({ alert ,setAlert, setErrorMsg, errorMsg }) => {
    useEffect(() => {
        setTimeout(() => {
            errorMsg? setErrorMsg(false) : setAlert(false)
        }, 2000)
    }, [alert, errorMsg])
    if(errorMsg) {
      return (
        <Alert 
        status='error'>
            <AlertIcon />
            Eliminaste una foto
        </Alert>
      )
    }
    if(alert) {
      return (
        <Alert 
        status='success'>
            <AlertIcon />
            Agregaste una foto a tus favoritos
        </Alert>
      )
    }
}

export default AlertMsg