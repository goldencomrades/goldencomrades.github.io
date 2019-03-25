import React, {Component} from 'react';

import './Header.css';

import yt from '../../assets/yt_logo_mono_light.png';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1>Golden Comrades</h1>
                <a href="https://www.youtube.com/channel/UC0nuidGQ3IG1JloW4_fC3Kg" target="_blank">
                    <img src={yt} alt="YouTube" className="yt_logo" style={{'marginTop': '10px'}}/>
                </a>
            </header>
        );
    }
}

export default Header;
