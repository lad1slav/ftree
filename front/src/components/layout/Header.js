import React from 'react';

function Header() {
    return (
     	<nav class="navbar navbar-expand-sm px-5 fixed-top">
			<a class="navbar-brand" href="#">
				<img src="img/logo-color.png" alt="logo" style={{width: 60}} />
			</a>

			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					Guest
				</li>
			</ul>
		</nav>	
    )
}

export default Header;