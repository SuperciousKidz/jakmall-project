import React, {useContext, useState} from 'react'
import { ValueContext } from '../../context/ValueContext';
const Payment = () => {

  const {values, setValues} = useContext(ValueContext);


  return (
    <div>{values.email}</div>
    
  )
}

export default Payment