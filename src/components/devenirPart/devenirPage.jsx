import { Component } from 'react';
import Footer from '../footer';

class DevenirPage extends Component {
    state = {  }
    render() {
        return (
            <div className='view under-navbar'>
                <div className='devenir-container'>
                    <div>
                    <h1>Devenir partenaire</h1>
                        <h5>
                            Iure architecto doloribus eligendi quas laborum distinctio. Voluptatem enim est voluptatem eos delectus. Veniam rem voluptatem ullam facilis reiciendis excepturi repellendus voluptatem. Odio vel voluptate excepturi eos corporis distinctio ipsum.
                        </h5>
                    </div>
                    <div className='devenir-mot'>
                        <h2>
                            Le mot du Directeur
                        </h2>
                        <h5>
                            "Le Raid Centrale Lyon est un événement phare de l'Ecole où le sport et l'esprit d'équipe sont mis à l'honneur. Pendant tout un week-end, plus de 200 participants s'engagent au côté de nos élèves à donner le meilleur pour une course mémorable. 
                            <br/>
                            <br/>
                            Je suis sûr que l'édition 2022 sera une réussite. L'enthousiasme, l'énergie, le partage, la persévérance et la joie sont déjà au rendez-vous dans la préparation de l'événement.
                            <br/>
                            <br/>
                            Bon raid à toutes et à tous !"
                            <br/><br/>
                            Pascal Ray
                        </h5>
                    </div>
                    {/* https://codepen.io/kathykato/pen/rZRaNe */}
                    <div id="container">
                        <button class="learn-more">
                            <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">Télécharger la plaquette</span>
                        </button>
                    </div>
                    <div/>
                </div>
                <Footer fullpage={false}/>
            </div>
        );
    }
}

export default DevenirPage;