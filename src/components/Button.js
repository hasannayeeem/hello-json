import React from 'react'

export const Button = ({settings,id,children}) => {
  const images = []
  console.log(id);
  const  img = children
  console.log(img.length);
  images.push(img);
  console.log(images);
  const chil = false; const hello = 'hello from button'
  return (
    // <button id ={id} style={settings.style?.desktop} className={`${settings.className}`}>{chil? children : <h6>{hello}</h6>}</button>
    <button id ={id} style={settings.style?.desktop} className={`${settings.className}`}>{ children }</button>
  )
}
