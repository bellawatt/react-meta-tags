# meta-tags

> A nice api for meta tag coverage across a variety of sites and services

[![NPM](https://img.shields.io/npm/v/meta-tags.svg)](https://www.npmjs.com/package/meta-tags) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @bellawatt/meta-tags
```

## Usage

```jsx
import React from 'react'
import Meta from 'meta-tags'

class Example extends Component {
  render () {
    return (
      <>
        <Meta>
          <Meta.Title>I am the title</Meta.Title>
          <Meta.Description>
            And I'm the description. I'm much longer sometimes
          </Meta.Description>
          <Meta.Image src="/some-great-image.png" />
        </Meta>
      </>
    )
  }
}
```

Be sure to add `react-snap` (included in this repo) to your build step if you're using react-router.

## License

MIT © [@bellawatt](https://github.com/@bellawatt)
