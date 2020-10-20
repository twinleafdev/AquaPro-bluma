import React from 'react';
// import { FaGithub } from 'react-icons/fa';
import { Link } from 'gatsby';
import styled from 'styled-components';
import './style.scss';
import logo from '../images/logo.png';
import headBg from '../images/bg_head.jpg';

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
const Navbar = () => (
	<NavStyles className="hero-head is-hidden-mobile">
		<nav className="navbar">
			<div className="container py-4">
				<div className="navbar-brand">
					<Link
						className="navbar-item"
						to="/"
					>
						<img src={logo} alt="Logo" />
					</Link>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<Link to="/" className="navbar-item">
							Home
						</Link>
						<Link to="/spa-covers" className="navbar-item">
							Spa Covers
						</Link>
						<Link to="/contact-us" className="navbar-item">
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</nav>
	</NavStyles>
);

export default Navbar;
