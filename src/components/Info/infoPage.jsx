import { Component } from 'react';
import Footer from '../footer';
import CustomNavBar from '../navbar';
import { useState } from 'react';

export default function InfoPage() {
    const [data, setData] = useState([]);
    fetch('assets/info/info.json')
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
                <div className='info-container'>
                    <h1>INFOS PRATIQUES</h1>
                    <div className='info-content'>
                        <h2>Questions fréquentes</h2>
                        <div className='info-content-item-content'>
                            {data ? data.map((q, index) => {
                                return (
                                    <div className='info-content-item-content-item'>
                                        <h3>{q.question}</h3>
                                        <h5>{q.reponse}</h5>
                                    </div>
                                )
                            }): ""}
                        </div>
                    </div>
                </div>
                <Footer fullpage={false}/>
            </div>
        </div>
    );
}