import React from 'react';
import ReactDOM from 'react-dom';
import HeaderRefactored from '../../components/headerRefactored';
import Bar from '../../components/bar';
import Footer from '../../components/footer';
import Language from '../../components/language';
import ProjectItem from './projectItem';
import './index.scss';
class Project extends Language {
    render() {
        const language = this.getLanguage();
        const module = 'project';
        const dataSource = this.getLanguageDict(language, module);
        return (
            <div className="project-page">
                <HeaderRefactored
                currentKey={module}
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
                <Footer logo="/images/wuhan2020-logo-gray.png" language={language} module={module}/>
            </div>
        );
    }
}

document.getElementById('root') && ReactDOM.render(<Project/>, document.getElementById('root'));

export default Project;
