import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';

export class Header extends Component {
    render(){
        const { header } = this.props;
        const props = this.props;

        return(
            <header>
                <div className="row header-title">
                    <div className="col s12 center-align">
                        <h5> { header.name } </h5>
                        <h6> {header.designation} </h6>
                    </div>
                    <div className="col s12 center-align">
                        <ul className="header-user-fields">
                            {
                                props.showEmail ?
                                    <li className="user-field">
                                        <span>
                                            <i className="fa fa-envelope-o header-user-icon" aria-hidden="true"></i>
                                            <a href='mailto:${header.email}'>{header.email}</a>
                                        </span>
                                    </li> : ''
                            }
                            {
                                props.showPhone ?
                                    <li className="user-field">
                                        <span>
                                            <i className="fa fa-phone-square header-user-icon" aria-hidden="true"></i>
                                            <a href='tel:${header.phone}'>{header.phone}</a>
                                        </span>
                                    </li> : ''
                            }
                            {
                                props.showWebsite ?
                                    <li className="user-field">
                                        <span>
                                            <i className="fa fa-globe header-user-icon" aria-hidden="true"></i>
                                            <a target="_blank" href={header.website}>{header.website}</a>
                                        </span>
                                    </li> : ''
                            }
                            {
                                props.showLinkedin ?
                                    <li className="user-field">
                                        <span>
                                            <i className="fa fa-linkedin-square header-user-icon" aria-hidden="true"></i>
                                            <a target="_blank" href={header.linkedin}>{header.linkedin}</a>
                                        </span>
                                    </li> : ''
                            }
                            {
                                props.showGithub ?
                                    <li className="user-field">
                                        <span>
                                            <i className="fa fa-github header-user-icon" aria-hidden="true"></i>
                                            <a target="_blank" href={header.github}>{header.github}</a>
                                        </span>
                                    </li> : ''
                            }
                            {
                                props.showStackOverflow ?
                                    <li className="user-field">
                                        <span>
                                            <i className="fa fa-stack-overflow header-user-icon" aria-hidden="true"></i>
                                            <a target="_blank" href={header.stackOverflow}>{header.stackOverflow}</a>
                                        </span>
                                    </li> : ''
                            }
                        </ul>
                    </div>
                    <hr/>
                </div>
            </header>
        )
    }
}

Header.defaultProps = {
    header: {},
    showEmail: true,
    showPhone: true,
    showLinkedin: true,
    showGithub: true,
    showWebsite: true,
    showStackOverflow: false
};

const mapStateToProps = (state) => ({
    header: state.resume.header
})

export default connect(mapStateToProps)(Header);
