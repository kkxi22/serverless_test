
import React, { PureComponent } from 'react'
import Markdown from 'markdown-to-jsx'

export default class Mark extends PureComponent {

  render() {
    return (
    <Markdown>## hahaha  ##

      ####   

      * hah
      * kdfl
    </Markdown>
    )
  }
}
