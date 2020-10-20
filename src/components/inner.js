import React from 'react';

import './style.scss';
import Helmet from './helmet';
//import Header from './header';
//import Midsection from './midsection';
import Layout from '../components/layout';
// import Footer from './footer';
// import Navbar from './navbar';
import Colors from '../images/colors.jpg';
import SpaCover from '../images/spa-cover.gif';

const Inner = ({ children }) => (
	<Layout>
        <div className="container">
        <img src={Colors} alt="colors" />
                
        <br/>
        <p>We have 14 different color options choose from. We also stock spa accessories, including 3 different styles of Spa Cover Lifts to work with your spa, spa pillows and more. With six styles of spa covers to choose from, you are sure to find quality and value in your new spa cover from Prestige Spa Covers.</p>
        <p>Upgrade your cover today to an ECO or Altima! Our ECO cover features a superior heat seal to the surface of the spa shell, increased insulation, maximizes heat retention &amp; helps reduce energy bills!</p>
        <p>Our Altima cover features a 5 x 3 taper, aluminum channeling for support, padded vinyl covered handles, reinforced stitching, enhanced white thread, box “X” stitching, full length steam stopper and a double layered vinyl skirt!</p>
        <p>
            <img src={SpaCover} alt="spa covers" />
            There are many upgrades available to make your spa cover fit your every need. Ask your dealer for details.
        </p>
        <div>
        <div>
        <ul>
        <li><span><br/>
        Oversized and freeform<br/>
        5″ – 3″ taper available<br/>
        6″ – 4″ taper available<br/>
        1.5 lb – 2 lb foam upgrade<br/>
        Available vapor upgrades (4 Mil &amp; chemical resistant barriers)<br/>
        Optional long steam stopper for added insulation<br/>
        Wind straps ( adjustable from 6 ‘ – 12 ‘ )<br/>
        Rubber-gripped handles<br/>
        14 colors to choose from<br/>
        spa accessories – cover Lifts – spa pillows<br/>
        Solar spa covers<br/>
        Cover caps<br/>
        Specialized spa cover cleaner<br/>
        </span></li>
        </ul>
        </div>
        </div>
        <p>All of our Spa Covers are manufactured using&nbsp;specialty manufactured vinyl for spa covers and energy&nbsp;efficient polystyrene inserts. Each insert is heat-sealed&nbsp;with a poly vapor moisture barrier to protect your spa cover&nbsp;against water absorption. Inhibitors in both the vinyl &amp; thread&nbsp;prevent premature aging of your spa cover, which all add up to a superior product.
			</p>
    </div>
            
            
	</Layout>
);

export default Inner;
