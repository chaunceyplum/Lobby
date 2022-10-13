import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetched, fetchUsers } from '../redux/DataSlice'
const RecipientList = () => {
  
  
  
    const recipients =useSelector(state => state.data.recipients)
    const dispatch =useDispatch()
    dispatch(fetchUsers)
  
  
  
    return (
        <div>

        </div>
  )
}

export default RecipientList