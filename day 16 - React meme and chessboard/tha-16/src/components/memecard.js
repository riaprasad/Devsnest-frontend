import React, {Component} from 'react';
import logo from './meme.png';
import '../App.css';

class MemeCard extends Component{
    render() {
        return(
            <div class="container">
            <img src={logo} />
            <h1>Meme Card</h1>
            <p>Made using React</p>
          </div>);
    }
}

export default MemeCard