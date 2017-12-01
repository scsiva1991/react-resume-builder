import React, { Component } from 'react';
import { connect } from 'react-redux';
import Experience from './Experience';

class ExperienceList extends Component {
    render() {
        return(
            <div>
                <h5>Experiences</h5>
                <hr/>
                {
                    this.props.experiences.map((experience, index) => {
                        return(
                            <Experience key={index} experience={experience} />
                        )
                    })
                }
            </div>
        )
    }
}

ExperienceList.defaultProps = {
    experiences: []
}

const mapStateToProps = (state) => ({
    experiences: state.resume.experiences
});

export default connect(mapStateToProps)(ExperienceList);
