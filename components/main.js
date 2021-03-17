import React, { Component } from 'react';
import Header from "../components/header"
import style from "../styles/home.module.css"
import Link from "next/link"

export default class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={style.about}>
            <img className={style.left} src="./About/entreprise.png"/>
            <div className={style.right}>
              <p className={style.title}>Sahara Marbre</p>
              <div className={style.desc}>
                <p>Le Groupe SAHARA MARBRE fondé en 1983 est basé à <u>RABAT</u> , <u>TEMARA</u> , <u>CASABLANCA</u>, <u>MARRAKECH</u> ET <u>NADOR</u> Entreprise familiale d’une centaine d’employés, nous perpétuons un savoir faire détenu depuis Trois générations de marbriers alliant tradition et modernité.</p>
                <p>Reconnu pour la maîtrise dans l’extraction, la commercialisation, l’import et l’export de tous types de Marbre,Granite et Pierre, SAHARA MARBRE est également plébiscité pour la réalisation de plans de travail de cuisine, revêtements de sol et mur pour salle de bain, bac à douche à l’Italienne, vasque, dallage…</p>
              </div>
              <Link href="/about"><p className={style.SavoirPlus}>Savoir plus</p></Link>
            </div>
        </div>
        <div className="Categories">
          
        </div>
      </>
    );
  }
}
