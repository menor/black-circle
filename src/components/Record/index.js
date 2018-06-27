import React from 'react'

function Record ({title, year, thumb}) {
  return (
    <div>
    <img src={thumb} />
    <p>{title}</p>
    </div>
  )
}

export default Record
