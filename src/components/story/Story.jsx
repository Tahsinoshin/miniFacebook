import "./story.css"

import { Avatar } from '@mui/material'

export default function Story({image, title}) {
  const defaultImg = "./assets/index.png"
  return (
    <div style={{backgroundImage: `url(${image})`}} className='story'>
    <Avatar className='story__avatar' src = { defaultImg }/>
    <h4>{ title }</h4>
    </div>
  )
}

