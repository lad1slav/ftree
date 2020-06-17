import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
     	<div className="side">
			<Link to="/family-tree" className="active"><i className="fas fa-network-wired"></i>Family Tree</Link>
			<Link to="/members"><i className="fas fa-user" style={{paddingLeft: 3}}></i>Members</Link>
			<Link to="/statistics"><i className="fas fa-chart-line" style={{paddingLeft: 2}}></i>Statistics</Link>
			<Link to="/login"><i className="fas fa-sign-out-alt" style={{paddingLeft: 2}}></i>Log Out</Link>
		</div>
    )
}

export default SideBar;