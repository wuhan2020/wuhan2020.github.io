import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header';
import Bar from '../../components/bar';
import Footer from '../../components/footer';
import Language from '../../components/language';
import Gitalk from '../../components/gitalk';
import './index.scss';
class Job extends Language {
    render() {
        const language = this.getLanguage();
        const module='job' ;
        const dataSource = this.getLanguageDict(language, module);
        return (
            <div className="job-page">
                <Header
                currentKey={module}
                type="normal"
                logo="/images/wuhan2020-logo-gray.png"
                language={language}
                onLanguageChange={this.onLanguageChange}
                />
                <Bar img="https://img.alicdn.com/tfs/TB115XwJzTpK1RjSZKPXXa3UpXa-160-160.png" text={dataSource.barText} />
                <section className="job-section">
                  <h3>{dataSource.sectionDescription}</h3>
                  <h4>{dataSource.purpose.title}</h4>
                  <p>{dataSource.purpose.desc}</p>
                  <h4>{dataSource.volunteers.title}</h4>
                  <p>{dataSource.volunteers.desc}</p>
                  <h4>{dataSource.method.title}</h4>
                  <p>{dataSource.method.desc}</p>
                </section>
                <Footer logo="/images/wuhan2020-logo-gray.png" language={language} module={module} />
            </div>
        );
    }
}

document.getElementById('root') && ReactDOM.render(<Job/>, document.getElementById('root'));

export default Job;
