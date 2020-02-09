import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header';
import Bar from '../../components/bar';
import Footer from '../../components/footer';
import Language from '../../components/language';
import siteConfig from '../../../site_config/site';
import projectConfig from '../../../site_config/project';
import ProjectItem from './projectItem';
import './index.scss';

class Project extends Language {
    render() {
        const language = this.getLanguage();
        const dataSource = projectConfig[language] || projectConfig[siteConfig.defaultLanguage];
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
                <Footer logo="/images/wuhan2020-logo-gray.png" language={language} />
            </div>
        );
    }
}

document.getElementById('root') && ReactDOM.render(<Project/>, document.getElementById('root'));

export default Project;