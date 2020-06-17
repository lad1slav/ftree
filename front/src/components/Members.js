import React, { Component } from 'react';
import MemberItem from './MemberItem';

class Members extends Component {

	state = {
		member_item_id: ""
	}

	callbackFunction = (childData) => {
		this.setState({member_item_id: childData});
		this.props.parentCallback(childData);
	}

  render() {
	return this.props.users.map((user) => (
		<MemberItem parentCallback = {this.callbackFunction} key={user.id} user={user} popup={this.props.popup} />
    ));
  }
}

export default Members;