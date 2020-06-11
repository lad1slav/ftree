import React, { Component } from 'react';

class MemberItem extends Component {

  render() {
    return (
    	<div className="member-item">
    		<div className="member-item-img" style={{backgroundImage: 'url("img/woman.jpg")'}}></div>
    		<p> {this.props.user.firstName + " " + this.props.user.secondName} </p>
    	</div>
    )
  }
}

export default MemberItem;