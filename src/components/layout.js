import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
// import Midsection from './midsection';
import Footer from './footer';
// import Navbar from './navbar';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		{children}

		{/* <Midsection /> */}
		<Footer />
	</div>
);

export default Layout;
