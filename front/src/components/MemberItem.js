import React, { Component } from 'react';

class MemberItem extends Component {
	constructor(props) {
		super(props);
		this.get_member_id = this.get_member_id.bind(this);
	}

	state = {
		member_item_id: ""
	}

	get_member_id() {
		this.state.member_item_id = this.props.user.id;
		this.props.parentCallback(this.props.user.id);
		this.props.popup.classList.remove('d-none');
		this.props.popup.classList.add('d-flex');
	}

  render() {
    return (
    	<div className="member-item" onClick={this.get_member_id} >
            <img className="member-item-img" src={this.props.user.url}/>
    		<p> {this.props.user.firstName + " " + this.props.user.secondName} </p>
    	</div>
    )
  }
}

export default MemberItem;