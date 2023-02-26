import React from 'react'

export const Div = ({children,settings, type, nodes}) => {
 
  return (
    <div style={settings.style?.desktop} className={`${type === 'Row' ?  'row justify-content-start align-items-center' : type === 'Column' ? 'col-6' :  (type ==='Box' && nodes[0]==='3e22e644-8bbc-4139-a015-b5a86ebb4e24') ? 'position-absolute !important top-0 start-100 translate-middle z-10' : ''}  ${settings?.general?.colSize?.desktop} `}>


        {children}
      
        
    </div>
  )
}
