import React from 'react'
import OctoImageInsert from './OctoImageInsert'
import OctoInfoInsert from './OctoInfoInsert'

const OctoCardInsert = props => {
  console.log(props.src)
  return (
    <section class="main-section">
      <section class="octo-card">
        <OctoImageInsert src={props.src} url={props.url} alt={props.alt} />
        <OctoInfoInsert
          imageNumber={props.imageNumber}
          cardUrl={props.cardUrl}
          imageName={props.imageName}
          profileUrl={props.profileUrl}
        />
      </section>
    </section>
  )
}

export default OctoCardInsert
