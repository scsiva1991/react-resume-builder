import React, { Component } from 'react';

export default class Education extends Component {
    render() {
        const { education } = this.props;
        return(
            <div className="row">
                <div className="col s6">
                    <span>
                        {education.degree}
                    </span>
                </div>
                <div className="col s6">
                    <span>
                        <i className="fa fa-calendar mg-r-5" aria-hidden="true"></i>
                        { education.dateFrom + ' - ' + education.dateTo }
                    </span>
                </div>
                <div className="col s12">
                    <ul className="experience-list-container">
                        <li className="experience-list"><i className="fa fa-map-marker mg-r-5 " aria-hidden="true"></i></li>
                        {
                            education.college ?
                            <li className="experience-list">{education.college}</li> : ''
                        }
                        {
                            education.city ?
                            <li className="experience-list">{education.city}</li> : ''
                        }
                        {
                            education.country ?
                            <li className="experience-list">{education.country}</li> : ''
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
