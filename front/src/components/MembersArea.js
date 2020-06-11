import React, { Component } from 'react';
import Members from './Members';

class MembersArea extends Component {
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
	        		<Members users={this.props.users} />
	        	</div>
	        </div>
      	</div>   
      ); 
  }
}

export default MembersArea;