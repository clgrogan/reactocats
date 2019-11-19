import React from 'react'

const OctoInfoInsert = props => {
  console.log(props.imageName)
  return (
    <section class="octo-info">
      <section class="octo-info-left">
        <p class="image-number">{props.imageNumber}</p>
        <a href={props.cardUrl} class="link-boxertocat">
          {props.imageName}
        </a>
      </section>
      <section class="octo-info-right">
        <a href={props.profileUrl} class="profile-link">
          img
        </a>
      </section>
    </section>
  )
}

export default OctoInfoInsert
