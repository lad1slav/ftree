import React, { Component } from 'react';

class MemberItem extends Component {
  render() {
    return (
    	<div className="member-item">
            <img className="member-item-img" src={this.props.user.url}/>
    		<p> {this.props.user.firstName + " " + this.props.user.secondName} </p>
    	</div>
    )
  }
}

export default MemberItem;