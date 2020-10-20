import React from 'react'
import Layout from '../components/layout';
import Form from '../components/form';
import Banner from '../components/banner';
import Spa from '../images/mpss-night.jpg';

const SpaCovers = ({ children }) => (
	<Layout>
    <Banner />
        <div className="container py-5 mx-5">
          <div className="columns">
            <div className="column is-two-thirds">
            <img src={Spa} />
            </div>
            <div className="column">
              <Form />
            </div>
          </div>
        </div>
            
	</Layout>
)

export default SpaCovers
