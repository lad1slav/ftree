import React, { Component } from 'react';
import MemberItem from './MemberItem';

class Members extends Component {
	user_data = {
    users: [
      {
         id: 1,
         name: 'Myname1',
         lastname: 'Mylastname1'
      },
      {
         id: 2,
         name: 'Myname2',
         lastname: 'Mylastname2'
      },
      {
         id: 3,
         name: 'Myname3',
         lastname: 'Mylastname3'
      }
    ]
  }

  render() {
    return this.user_data.users.map((user) => (
    	<MemberItem key={user.id} user={user} />
    ));
  }
}

export default Members;