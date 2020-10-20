import React from 'react'
import Layout from '../components/layout';
import Form from '../components/form';
import Spa from '../images/mpss-night.jpg';

const SpaCovers = ({ children }) => (
	<Layout>
        <div className="container py-5">
          <div className="columns">
            <div className="column is-two-thirds">
            <h3>Call to Schedule Service</h3>
            <h2>732-237-2782</h2>

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
