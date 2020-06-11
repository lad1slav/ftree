import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
     	<div class="side">
			<Link to="/family-tree" class="active"><i class="fas fa-network-wired"></i>Family Tree</Link>
			<Link to="/members"><i class="fas fa-user" style={{paddingLeft: 3}}></i>Members</Link>
			<Link to="/statistics"><i class="fas fa-chart-line" style={{paddingLeft: 2}}></i>Statistics</Link>
			<Link to="/login"><i class="fas fa-sign-out-alt" style={{paddingLeft: 2}}></i>Log Out</Link>
		</div>
    )
}

export default SideBar;