import React from 'react'

const OctoImageInsert = props => {
  console.log(props.src)
  return (
    <a href={props.url} class="octo-image-a">
      <img src={props.src} class="octo-image" alt={props.alt} />
    </a>
  )
}

export default OctoImageInsert
