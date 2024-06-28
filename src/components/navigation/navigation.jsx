import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './navigation.css'
import newImage from '../../assets/homeimages/new.png';



function Nav({ page }) {
	const [Show, setShow] = useState(false)

	const handleToggle = () => {
		setShow(!Show)
	}

	return (
		<>	<div className='navigation-small'>

			<div className='navbody'>
				<div className='logo'>
					<a href="/">
						<img
							className='logo-image'
							src={newImage}
							alt='company logo'
						/>
					</a>					</div>
				<div className="menu-button text-light fw-bold" onClick={handleToggle}>
					{Show ? <i style={{ backgroundColor: `#5956e8` }} class="bi fw-bold p-2 rounded bi-x-lg"></i> : <i style={{ backgroundColor: `#5956e8` }} className="bi	 rounded  p-2 fw-bold bi-list"></i>}
				</div>
			</div>
			<div className='menute'>
				<nav className={`menu ${Show ? 'open' : 'close'}`}>
					<Link to='/'>Home</Link>
					<Link to='/Aboutus'>About</Link>
					<Link to='/Blog'>Blog</Link>
					<Link to='/Services'>Services</Link>
					<Link to='/ContactUs'>Contact</Link>
					<div className='get-started-button'>

					</div>
				</nav>
			</div>
			<nav className='menu-large'>
				<Link style={page === "home" ? { color: "#5956E8" } : {}} to='/'>Home</Link>
				<Link style={page === "about" ? { color: "#5956E8" } : {}} to='/Aboutus'>About</Link>
				<Link style={page === "blog" ? { color: "#5956E8" } : {}} to='/Blog'>Blog</Link>
				<Link style={page === "services" ? { color: "#5956E8" } : {}} to='/Services'>Services</Link>
				<Link style={page === "contact" ? { color: "#5956E8" } : {}} to='/ContactUs'>Contact</Link>
				<div className='get-started-button'>

				</div>
			</nav>
		</div>
		</>
	)
}

export default Nav
