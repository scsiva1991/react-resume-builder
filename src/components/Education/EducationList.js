import React, { Component } from 'react';
import { connect } from 'react-redux';
import Education from './Education';

class EducationList extends Component {
    render() {
        return(
            <div>
                <h5>Education</h5>
                <hr/>
                {
                    this.props.education.map((education, index) => {
                        return(
                            <Education key={index} education={education} />
                        )
                    })
                }
            </div>
        )
    }
}

EducationList.defaultProps = {
    education: []
}

const mapStateToProps = (state) => ({
    education: state.resume.education
});

export default connect(mapStateToProps)(EducationList);
