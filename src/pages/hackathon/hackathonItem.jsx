import React from 'react';
import { getLink } from '../../../utils';

class HackathonItem extends React.Component {
  render() {
    const { hackathon } = this.props;
    return (
      <div className="hackathon-item">
        {/* <div className="img-container">
          <img src={getLink(hackathon.img)} />
        </div> */}
        <div className="hackathon-text-container">
          {/* <h4><a href={hackathon.link}>{hackathon.title}</a></h4> */}
          {/* <p>Github: <a href={hackathon.repoLink}>{hackathon.repoLink}</a></p> */}
          <p>{hackathon.description}</p>
        </div>
      </div>
    );
  }
}

export default HackathonItem;