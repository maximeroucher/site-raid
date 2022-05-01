import { Component } from 'react';
import Footer from '../footer';
import CustomNavBar from '../navbar';
import { useState } from 'react';

export default function AvantGout() {
    const [data, setData] = useState([]);
    fetch('assets/devenir/devenir.json')
        .then(res => res.json())
        .then(json => setData(json))
        .catch(
            function(err){
            console.log(err, ' error')
            }
        )
    return (
        <div>
            <CustomNavBar/>
            <div className='view under-navbar'>
                <div className='devenir-container'>
                    <div>
                    <h1>DEVENIR PARTENAIRE</h1>
                    <h5>
                        {data.intro}
                    </h5>
                    <h5>Votre Contact : {data.prenom} {data.nom} - {data.tel} - <a href={"mailto:" + data.mail}>{data.mail}</a></h5>
                    </div>
                    <div className='devenir-mot'>
                        <h2>
                            Le mot du Directeur
                        </h2>
                        <h5>
                            {data.motDirecteur ? data.motDirecteur.map((mot, index) => {
                                return (
                                    <p>
                                        {mot}
                                    </p>
                                )
                            }) : ""}
                        </h5>
                    </div>
                    {/* https://codepen.io/kathykato/pen/rZRaNe */}
                    <div id="button-container">
                        <a className="learn-more" href={process.env.PUBLIC_URL + "assets/devenir/" + data.plaquette}>
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Télécharger la plaquette</span>
                        </a>
                    </div>
                </div>
                <Footer fullpage={false}/>
            </div>
        </div>
    );
}