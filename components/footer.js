import React, { Component } from 'react';
import Link from "next/link"

import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="top">
          <div className="left">
            <img src="./logo.png" />
            <p className="title">Siège social Sahara marbre :</p>
            <p className="Addr">Ste Sahara Marbre Sarl, Avenue Hoummane Al Fatouaki, Rabat, Rabat-Salé-Zemmour-Zaër, Maroc</p>
            <p className="Email">Email : contact@saharamarbre.ma</p>
            <p className="tele"> Télé :  (+212) 5 37 655 979</p>
            <div className="socialMedia">
              <Link href="/facebook" className="SocialMediaIcons"><FacebookIcon className="facebook "/></Link>
              <Link href="/facebook" className="SocialMediaIcons"><YouTubeIcon className="youtube "/></Link>
              <Link href="/facebook" className="SocialMediaIcons"><InstagramIcon className="instagram"/></Link>
              <Link href="/facebook" className="SocialMediaIcons"><WhatsAppIcon className="whatsapp"/></Link>
            </div>
          </div>
          <div className="right">
            <img className="maps" src="./maps.png"/>
          </div>
        </div>
        <p className="bottom">©2021 Sahara marbe All Rights Reserved | Powered   by IOH.ma</p>

      </div>
    );
  }
}
