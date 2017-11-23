import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import PropTypes from 'prop-types';

export default class SkillChart extends Component {
    render() {
        const {skillPercentage, title} = this.props;
        const data = {
        	datasets: [{
        		data: [skillPercentage, 100 - skillPercentage],
        		backgroundColor: [
            		'#1976d2'
                ]

        	}]
        };
        const options = {
            tooltips: {
                enabled: false
            }
        }

        console.log(data);

        return(
            <div>
                <h6 className="center-align">{title}</h6>
                <Doughnut data={data} width={200} height={100} options={options}/>
            </div>
        )
    }
}

SkillChart.proptypes = {
    skillPercentage: PropTypes.number.isRequired,
    title: PropTypes.string
}
