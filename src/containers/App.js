import React, {Component} from 'react';
import { Header, SideNav, ProjectList, TechSkills } from '../components/index';
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
                    <div className="row">
                        <div className="col s6">
                            <ProjectList/>
                        </div>
                        <div className="col s6">
                            <TechSkills/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
