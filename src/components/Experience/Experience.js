import React, { Component } from 'react';
import './Experience.scss';

export default class Experience extends Component {
    render() {
        const { experience } = this.props;

        return(
            <div>
                <div className="row">
                    <div className="col s6">
                        <span>
                            {experience.designation}
                        </span>
                    </div>
                    <div className="col s6">
                        <span>
                            <i className="fa fa-calendar mg-r-5" aria-hidden="true"></i>
                            { experience.dateFrom + ' - ' + experience.dateTo }
                        </span>
                    </div>
                    <div className="col s12">
                        <ul className="experience-list-container">
                            <li className="experience-list"><i className="fa fa-map-marker mg-r-5 " aria-hidden="true"></i></li>
                            {
                                experience.company ?
                                <li className="experience-list">{experience.company}</li> : ''
                            }
                            {
                                experience.city ?
                                <li className="experience-list">{experience.city}</li> : ''
                            }
                            {
                                experience.country ?
                                <li className="experience-list">{experience.country}</li> : ''
                            }
                        </ul> 
                    </div>
                </div>
            </div>
        )
    }
}
