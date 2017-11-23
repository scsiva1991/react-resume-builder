import React, { Component } from 'react';
import {  connect } from 'react-redux';
import Project from './Project';

export class ProjectList extends Component {
    render() {
        return(
            <div>
                <h5>Projects</h5>
                <hr/>
                {
                    this.props.projects.map((project, index) => {
                        return(
                            <Project key={index} project={project}/>
                        )
                    })
                } 
            </div>
        )
    }
}

ProjectList.defaultProps = {
    projects: []
};

const mapStateToProps = (state) => ({
    projects: state.resume.projects
});

export default connect(mapStateToProps)(ProjectList);
