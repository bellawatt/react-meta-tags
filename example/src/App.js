import React, { Component } from 'react'

import Meta from 'meta-tags'

export default class App extends Component {
  render () {
    return (
      <div>
        Oh Hey

        <Meta>
          <Meta.Title>I am the title</Meta.Title>
          <Meta.Description>
            And I'm the description. I'm much longer sometimes
          </Meta.Description>
          <Meta.Image src="/some-great-image.png" />
        </Meta>
      </div>
    )
  }
}
