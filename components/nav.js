import React, { Component } from 'react';
import Link from "next/link"
import ListIcon from '@material-ui/icons/List';
import CloseIcon from '@material-ui/icons/Close';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <img className="logo" src="../logo.png" />
        <label htmlFor="IconMenuCheck" className="MenuIcon"><ListIcon/></label>
        <input hidden type="checkbox" id="IconMenuCheck" />
        <div className="MenuBar">
        <label htmlFor="IconMenuCheck" className="CloseMenuIcon"><CloseIcon/></label>
          <ul className="navBarEle">
            <Link href="/" ><li>Accueil</li></Link>
            <Link href="/about" ><li>A propos de nous</li></Link>
            <Link href="/produits" ><li>Produits</li></Link>
            <Link href="/galerie" ><li>Galerie</li></Link>
            <Link href="/contact" ><li>Contact</li></Link>
          </ul>
          <Link href="/demande-un-devis"><p className="DDevis">Demander un devis</p></Link>
        </div>
      </nav>
    );
  }
}
