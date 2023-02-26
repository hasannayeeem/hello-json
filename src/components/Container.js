import React from 'react'

export const Container = ({id, settings, children}) => {
  return (
    <div id={id}  className={`${settings.className}`}>
        {children}
    </div>
  )
}
