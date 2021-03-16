import Head from 'next/head'
import '../styles/home.module.css'
import React, { Component } from 'react';
import Nav from "../components/nav"
import Footer from "../components/footer"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/logo.ico" />
          <title>Accueil | E-Commere</title>
        </Head>
        <main>
          <Nav/>
          <Footer/>
        </main>
    </div>
    );
  }
}
