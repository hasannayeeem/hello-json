import React from 'react'

export const H1 = ({id,settings,children}) => {
  return (
    <div id={id} style={settings.style?.desktop} className={`${settings.className}`}>
        {children}
    </div>
  )
}
