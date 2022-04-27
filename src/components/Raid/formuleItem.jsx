import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faMountain } from '@fortawesome/free-solid-svg-icons';

class FormuleItem extends Component {
    state = {  } 
    render() { 
        return (
            <div className="formule">
                <div className="formule-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="formule-content">
                    <span>
                        {this.props.content}
                    </span>
                </div>
                <div className='formule-data'>
                    <div className='km'>
                        <FontAwesomeIcon icon={faMapLocationDot} style={{height: 30}}/>
                        <span>
                            {this.props.km} km
                        </span>
                    </div>
                    <div className='d'>
                        <FontAwesomeIcon icon={faMountain} style={{height: 30}}/>
                        <span>
                            D+ : {this.props.dPlus} m
                        </span>
                        <span>
                            D- : {this.props.dMinus} m
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default FormuleItem;