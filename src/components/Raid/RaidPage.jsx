import { Component } from 'react';
import { FullPage, Slide } from 'react-full-page';
import Formule from './formule';
import Echeance from './echeance';
import AvantGout from './avantgout';
import Footer from '../footer';


class Home extends Component {
    state = {  }
    render() {
        return (
            <FullPage>
                <Slide>
                    <AvantGout/>
                </Slide>
                <Slide>
                    <Formule/>
                </Slide>
                <Slide>
                    <Echeance/>
                    <Footer fullpage={true}/>
                </Slide>
            </FullPage>
        );
    }
}

export default Home;