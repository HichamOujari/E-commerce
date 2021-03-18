
import Head from 'next/head'
import '../styles/home.module.css'
import React, { Component } from 'react';
import Nav from "../components/nav"
import Footer from "../components/footer"
import ReactPlayer from 'react-player'

export default function about() {
    return (
        <div className="apropos">
            <Nav/>
            <div className="part1">
                <p>A PROPOS DE NOUS</p> 
            </div>
            <div className="part2">
                <div className="leftside">
                    <p>
                    Le Groupe SAHARA MARBRE fondé en 1983 est basé à  <strong>RABAT, TEMARA , CASABLANCA, MARRAKECH ET NADOR</strong>  Entreprise familiale d’une centaine d’employés, nous perpétuons un savoir faire détenu depuis Trois générations de marbriers alliant tradition et modernité.

Reconnu pour la maîtrise dans l’extraction, la commercialisation, l’import et l’export de tous types de Marbre,Granite et Pierre, SAHARA MARBRE est également plébiscité pour la réalisation de plans de travail de cuisine, revêtements de sol et mur pour salle de bain, bac à douche à l’Italienne, vasque, dallage…

Toujours plus originales et complexes, les matières travaillées sont à la fois nobles, naturelles et intemporelles : Pierres, Marbres, Granits, Ardoises, Onyx, Agate … Mais aussi novateurs : Quartz, Silestone….

De dimension humaine et familiale, nous disposons d’ateliers à la pointe de la technique, d’un stock de matières sans cesse renouvelées et de nos propres équipes formées à notre savoir-faire.
tP
Afin d’affiner votre choix, nous vous proposons plusieurs sites combinant showrooms, parc à tranches et ateliers.
                    </p>
                </div>
                <div className="rightside">
                    <ReactPlayer url="../https://https://www.youtube.com/watch?v=LcXuM3DTa3M&t=11s.youtube.com/watch?v=HV_4iVnTkm0/video.mp4" ></ReactPlayer>
                </div>
                <div className="References"></div>
            </div>
            <Footer/>
        </div>
    )
}