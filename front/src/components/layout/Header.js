import React from 'react';

function Header() {
    return (
     	<nav className="navbar navbar-expand-sm px-5 fixed-top">
			<a className="navbar-brand" href="#">
				<img src="img/logo-color.png" alt="logo" style={{width: 60}} />
			</a>

			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					Guest
				</li>
			</ul>
		</nav>	
    )
}

export default Header;