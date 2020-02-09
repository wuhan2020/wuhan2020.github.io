import React from 'react';
import { getLink } from '../../../utils';

class ProjectItem extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <div className="project-item">
        <div className="img-container">
          <img src={getLink(project.img)} />
        </div>
        <div className="project-text-container">
          <h4><a href={project.link}>{project.title}</a></h4>
          <p>{project.description}</p>
        </div>
      </div>
    );
  }
}

export default ProjectItem;