import React from 'react'
import Layout from '../components/layout';
import Banner from '../components/banner';

const SpaCovers = ({ children }) => (
	<Layout>
    <Banner />
        <div className="container py-5 mx-5">
          <div className="columns">
            <div className="column is-two-thirds">
              <h2>Thank you for contacting us! If you need immediate service please call: 732-237-2782</h2>
            </div>
            <div className="column">
              
            </div>
          </div>
        </div>
            
	</Layout>
)

export default SpaCovers
