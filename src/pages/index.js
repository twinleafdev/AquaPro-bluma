import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import Layout from '../components/layout';
import Form from '../components/form';
import Text from '../components/home-text';
import BackgroundSlider from 'gatsby-image-background-slider';
import heroBg from '../images/hero-bg.jpg';


const HeroStyles = styled.section`
	.hero-body{
		background-image: url(${heroBg});
		background-size: cover;
		background-position: center top;
		background-repeat: no-repeat;
	}
`;

const IndexPage = ({ children }) => (
<Layout>
<HeroStyles className="hero">
<div className="hero-body">
    <div className="container center slider-wrap">
        
    <BackgroundSlider 
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 4000, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={2} // transition duration between images
      duration={4} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={["logo-slide.png", "hot-tub-sale.jpg", "chems.jpg"]} 

      // pass down standard element props
    //   style={{
    //     transform: "rotate(-2deg) scale(.9)",
    //   }}           
    > 

    </BackgroundSlider>
    
       
    </div>
</div>
</HeroStyles>
<div className="container py-5"> 
    <div className="columns">
        <div className="column is-two-thirds">
            <Text />
        </div>
        <div className="column">
            <Form />
        </div>
    </div>
</div>
</Layout>
);

export default IndexPage;
