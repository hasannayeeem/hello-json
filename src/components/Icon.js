import React from 'react'

 

export const Icon = ({id,settings,children}) => {
  console.log(id)
  return (
    <span id={id} style={settings?.general?.icon?.style?.desktop} className={`${settings?.general?.icon?.type}`}>
    {children}</span>
    
  )
}
