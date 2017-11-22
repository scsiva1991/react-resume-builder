import React, { Component } from 'react';

export default class Project extends Component {
    render() {
        const {project} = this.props;
        return(
            <div>
                <div className="row">
                    <div className="col s6">
                        <span>
                            <i className="fa fa-bookmark-o mg-r-5" aria-hidden="true"></i>
                            {project.name}
                        </span>
                    </div>
                    <div className="col s6">
                        <span>
                            <i className="fa fa-calendar mg-r-5" aria-hidden="true"></i>
                            { project.dateFrom + ' - ' + project.dateTo }
                        </span>
                    </div>
                    <div className="col s12">
                        <em> {project.description} </em>
                    </div>
                    <div className="col s12">
                        <ul>
                            {
                                project.details.map((detail, index) => {
                                    return(
                                        <li key={index}>
                                            <span>
                                                <i className="fa fa-square-o mg-r-5" aria-hidden="true"></i>
                                                {detail}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
