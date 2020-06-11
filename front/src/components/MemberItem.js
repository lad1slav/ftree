import React, { Component } from 'react';

class MemberItem extends Component {
  render() {
    return (
    	<h1> {this.props.user.name} </h1>
    )
  }
}

export default MemberItem;