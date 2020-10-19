import React from 'react'
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
import headBg from '../images/bg_head.jpg';

const FooterStyles = styled.section`
	.footer{
		background-image: url(${headBg});
		background-size: cover;
		background-position: center top;
		background-repeat: no-repeat;
	}
`;

const Footer = () => (

    <FooterStyles>
      <footer className='footer center has-background-light'>
        <div className='content has-text-centered py-6'>
          <h2>New Jersey’s Spa Service Headquarters!</h2>
        </div>
      </footer>
    </FooterStyles>
)

export default Footer
