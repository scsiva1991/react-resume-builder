import React, { Component } from 'react';
import $ from 'jquery';
import materializejs from 'materialize-css/dist/js/materialize.js';
import './SideNav.scss';

export default class SideNav extends Component {

    componentDidMount() {
        $(".button-collapse").sideNav();
    }

    closeSideNav = () => {
        $('.button-collapse').sideNav('hide');
    }

    render() {
        return(
            <div>
                <ul id="slide-out" className="side-nav">
                    <li> 
                        <i className="fa fa-times side-nav-close" onClick={this.closeSideNav} aria-hidden="true"></i>
                    </li>
                 </ul>
                 <a href="#" data-activates="slide-out" className="button-collapse">
                    <i className="fa fa-bars side-menu-bar blk" aria-hidden="true"></i>
                </a>
            </div>
        )
    }
}
