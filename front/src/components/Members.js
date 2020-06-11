import React, { Component } from 'react';
import MemberItem from './MemberItem';

class Members extends Component {
  render() {
	return this.props.users.map((user) => (
		<MemberItem key={user.id} user={user} />
    ));
  }
}

export default Members;