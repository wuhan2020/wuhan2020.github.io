import React from 'react';
import ReactDOM from 'react-dom';

import Language from "../../components/language";

import './index.scss';

class HackathonKanban extends Language {

    render() {
        const language = ['zh-cn'];
        const dataSource = this.getLanguageDict(language, 'hackathonKanban');
        const { contentTitle } = dataSource;
        return (
            <div className="kanban-page">
                <main>
                    <article>
                        <section className="content-title">
                            <div className="content-title-text">{contentTitle}</div>
                        </section>
                    </article>
                </main>
            </div>
        );
    }

}

document.getElementById('root') && ReactDOM.render(<HackathonKanban />, document.getElementById('root'));

export default HackathonKanban;