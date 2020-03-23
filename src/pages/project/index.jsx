import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header';
import Bar from '../../components/bar';
import Footer from '../../components/footer';
import Language from '../../components/language';
import ProjectItem from './projectItem';
import './index.scss';
import GitalkComponent from "gitalk/dist/gitalk-component";
import 'gitalk/dist/gitalk.css';
class Project extends Language {
    render() {
        const language = this.getLanguage();
        //const dataSource = projectConfig[language] || projectConfig[siteConfig.defaultLanguage];
        const dataSource = this.getLanguageDict(language, 'project');
        return (
            <div className="project-page">
                <Header
                currentKey="project"
                type="normal"
                logo="/images/wuhan2020-logo-gray.png"
                language={language}
                onLanguageChange={this.onLanguageChange}
                />
                <Bar img="https://img.alicdn.com/tfs/TB115XwJzTpK1RjSZKPXXa3UpXa-160-160.png" text={dataSource.barText} />
                <section className="project-section">
                  <h3>{dataSource.sectionDescription}</h3>
                  {dataSource.projects.list.map((project, i) => (
                    <ProjectItem project={project} key={i} />
                    ))}
                </section>
                <section className="project-section">
                  <GitalkComponent options={{
                    clientID: "728da77f67226e477f03",
                    clientSecret: 'ec7e55e9a7a022900677599b776e4164c1fdd759',
                    repo: 'website-comment',
                    owner: 'wuhan2020',
                    admin: ['zhaofeng-shu33', 'iLtc', 'jeremy0519', 'lovepoem', 'chenrui333'],
                    id: window.location.pathname,
                    distractionFreeMode: false // Facebook-like distraction free mode
                  }}/>
                </section>
                <Footer logo="/images/wuhan2020-logo-gray.png" language={language} />
            </div>
        );
    }
}

document.getElementById('root') && ReactDOM.render(<Project/>, document.getElementById('root'));

export default Project;
