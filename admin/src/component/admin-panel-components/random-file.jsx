import React from 'react'
import { useParams } from 'react-router-dom'

const RandomFile = () => {
    const {Id} = useParams()
    console.log({Id})
  return (
    <div>{ Id }</div>
  )
}

export default RandomFile