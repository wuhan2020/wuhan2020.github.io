import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import GitalkComponent from "gitalk/dist/gitalk-component";
import 'gitalk/dist/gitalk.css';

const propTypes = {
  class_name: PropTypes.string.isRequired
};

class Gitalk extends React.Component {
  render() {
    const { class_name } = this.props;

    return(
      <section className={class_name}>
        <GitalkComponent options={{
          clientID: "728da77f67226e477f03",
          clientSecret: 'ec7e55e9a7a022900677599b776e4164c1fdd759',
          repo: 'website-comment',
          owner: 'wuhan2020',
          admin: ['zhaofeng-shu33', 'iLtc', 'jeremy0519', 'lovepoem', 'chenrui333', 'darlk', 'frank-zsy','pengcc'],
          id: window.location.pathname,
          distractionFreeMode: false // Facebook-like distraction free mode
        }}/>
      </section>
    )
  }
}

Gitalk.propTypes = propTypes;

export default Gitalk;
