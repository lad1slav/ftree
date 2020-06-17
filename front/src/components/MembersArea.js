import React, { Component } from 'react';
import Members from './Members';

class MembersArea extends Component {
	constructor(props) {
		super(props);
		this.close_popup = this.close_popup.bind(this);
	}

	close_popup() {
		document.getElementById('m-popup').classList.remove('d-flex');
		document.getElementById('m-popup').classList.add('d-none');
	}


	state = {
		member_item_id: "",
		user: ""
	}

	callbackFunction = (childData) => {
		this.setState({member_item_id: childData});

		this.state.user = this.props.users.filter(user => {
			return user.id === childData;
		});

		document.getElementById('popup-img').src = this.state.user[0].url;
		document.getElementById('popup-name').innerHTML = `${this.state.user[0].firstName} ${this.state.user[0].secondName}`;
		document.getElementById('popup-status').innerHTML = `<b>${this.state.user[0].status}</b>`;
        document.getElementById('popup-position').innerHTML = this.state.user[0].positions[0].position;
		document.getElementById('popup-email').innerHTML = this.state.user[0].email;
		document.getElementById('popup-phone').innerHTML = this.state.user[0].phoneNumber;
		document.getElementById('popup-birth').innerHTML = `День народження: <b>${this.state.user[0].birthDate}</b>`;
		document.getElementById('popup-joined').innerHTML = `Бестівець з: <b>${this.state.user[0].inviteDate}</b>`;
	}

  render() {
	return(
		<div>
	      	<div className="search">
	          <input type="text" placeholder="Find BESTie" />
	          <span><i className="fas fa-search"></i></span>
	        </div>
	        <div className="buttons">
	          <button className="button"><i className="fas fa-plus pr-2"></i>Add New BESTie</button>
	        </div>

	        <div className="area" style={{overflowY: 'auto'}}>
	        	<div className="d-flex flex-row flex-wrap justify-content-between">
	        		<Members parentCallback = {this.callbackFunction} users={this.props.users} popup={document.getElementById('m-popup')} />
	        	</div>
	        </div>

	        <div id="m-popup" className="member-popup d-none align-items-center justify-content-center">
	        	<div className="member-popup-content position-relative row">
        			<div className="col-6 px-0 img-container">
						<img id="popup-img" className="popup-img"/>
					</div>
					<div className="col-6 popup-data">
						<p id="popup-name" className="mb-0"></p>
						<p id="popup-status" className="mb-4"></p>
                        <p id="popup-position" className="mb-5"></p>
						<p>Контактні дані:</p>
						<p id="popup-email"></p>
						<p id="popup-phone" className="mb-5"></p>
						<p id="popup-birth"></p>
						<p id="popup-joined"></p>
					</div>
					<div className="exit-popup" onClick={this.close_popup}>
		        		<div></div>
		        		<div></div>
		        	</div>
	        	</div>
	        </div>
      	</div>   
      ); 
  }
}

export default MembersArea;