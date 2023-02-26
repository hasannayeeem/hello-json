import React from 'react'

export const Img = ({id,settings,children}) => {
  // const images = []
  // const  img = settings?.general?.img?.src
  // console.log(img.length);
  // images.push(img);
  // console.log(images);
  return (
    <img id={id} style={settings.style?.desktop} className={`img-fluid`} src={settings?.general?.img?.src} alt="img" />
  )
}
