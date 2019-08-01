import React from 'react'

export default class EyesOnMe extends React.Component {

  listenForFocus = () => {
    console.log('Good!')
  }

  listenForBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button 
      onFocus={this.listenForFocus}
      onBlur={this.listenForBlur}
      >Click me</button>
    )
  }
}

