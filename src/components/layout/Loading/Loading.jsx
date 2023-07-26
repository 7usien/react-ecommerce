import React from 'react'

const Loading = ({children, error, loading}) => {
  return (
   <div>{ loading ? "loading please wait" : error ? "error from serveer" : children}</div>
  )
}

export default Loading