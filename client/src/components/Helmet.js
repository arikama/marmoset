import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class extends Component {
  render() {
    return (
      <Helmet
        defaultTitle='Marmoset'
      >
        <link href='/favicon.ico' rel='icon' type='image/x-icon' />
      </Helmet>
    )
  }
}
