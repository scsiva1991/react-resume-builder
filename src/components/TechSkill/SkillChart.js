import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from 'react-circular-progressbar';
import './TechSkill.scss';

export default class SkillChart extends Component {
    render() {
        const {skillPercentage, title} = this.props;

        return(
            <div className="center-align">
                <h6 >{title}</h6>
                <CircularProgressbar percentage={skillPercentage} />
            </div>
        )
    }
}

SkillChart.proptypes = {
    skillPercentage: PropTypes.number.isRequired,
    title: PropTypes.string
}
