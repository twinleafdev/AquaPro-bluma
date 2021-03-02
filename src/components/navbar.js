//import React from 'react';
import React, { useState } from "react";
// import { FaGithub } from 'react-icons/fa';
// import { Link } from 'gatsby';
import styled from 'styled-components';
import './style.scss';
import logo from '../images/logo.png';
import headBg from '../images/bg_head.jpg';
// import TransitionLink from "gatsby-plugin-transition-link";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const NavStyles = styled.div`
	.navbar {
		background-image: url(${headBg});
		background-size: cover;
		background-position: center top;
		background-repeat: no-repeat;
	}
	.navbar-item {
		color: #fff;
	}
`;


	function Navbar () {

		const [isExpanded, toggleExpansion] = useState(false)
	  
		return (
	<NavStyles className="hero-head">
		<nav className="navbar">
			<div className="container py-4">
				<div className="navbar-brand">
					<AniLink  fade
						className="navbar-item"
						to="/"
					>
						<img src={logo} alt="Logo" />
					</AniLink>
				
					<button
					onClick={() => toggleExpansion(!isExpanded)}
					className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenuHeroA" >
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					</button>
				</div>

				<div id="navbarMenuHeroA" className={`${ isExpanded ? `is-active` : `not-active` } navbar-menu`}>
					<div className="navbar-end">
						<AniLink  fade to="/" className="navbar-item">
							Home
						</AniLink>
						<AniLink  fade to="/spa-covers" className="navbar-item">
							Spa Covers
						</AniLink>
						<AniLink fade to="/contact-us" className="navbar-item">
							Contact Us
						</AniLink>
					</div>
				</div>
			</div>
		</nav>
	</NavStyles>
)}

export default Navbar;
