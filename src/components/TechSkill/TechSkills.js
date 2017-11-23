import React, { Component } from 'react';
import { connect } from 'react-redux';
import SkillChart from './SkillChart';

class TechSkills extends Component {
    render() {
        return(
            <div>
                <h5>My Tech Skills</h5>
                <hr/>
                <div className="row">
                {
                    this.props.techSkills.map((techSkill, index) => {
                        return(
                            <div className="col s4">
                                <SkillChart key={index} title={techSkill.name} skillPercentage={techSkill.skillPercentage} />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

TechSkills.defaultProps = {
    techSkills: []
};

const mapStateToProps = (state) => ({
    techSkills: state.resume.techSkills
});

export default connect(mapStateToProps)(TechSkills);
