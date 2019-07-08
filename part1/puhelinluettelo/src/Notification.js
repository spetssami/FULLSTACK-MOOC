import React from 'react'

const Notification = ({ message, bool }) => {
    if (message === null) {
      return null
    }
    const className = (bool) ? "success" : 'error';
    return (
      <div className={className}>
        {message}
      </div>
    )
  }

export default Notification