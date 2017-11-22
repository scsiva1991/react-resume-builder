import React, {Component} from 'react';
import { Header, SideNav } from '../components/index';
import {connect} from 'react-redux';
import './App.scss';
import materialize from 'materialize-css/dist/css/materialize.css';
import '../../public/stylesheets/font-awesome/css/font-awesome.min.css';
export default class App extends Component {
    render(){
        return(
            <div>
                <SideNav/>
                <div className="container">
                    <Header/>
                </div>
            </div>
        )
    }
}
