import React from 'react';
import ReactDOM from 'react-dom';
import KanbanTimer from './kanbanTimer';
import Language from "../../components/language";

import './index.scss';

class HackathonKanban extends Language {

    render() {
        const language = ['zh-cn'];
        const dataSource = this.getLanguageDict(language, 'hackathonKanban');
        const { contentTitle, kanbanTimer } = dataSource;
        return (
            <div className="kanban-page">
                <main>
                    <article>
                        <section className="content-title">
                            <div className="content-title-text">{contentTitle}</div>
                        </section>
                        <section className="kanban-timer">
                            <KanbanTimer {...kanbanTimer} />
                        </section>
                    </article>
                </main>
            </div>
        );
    }

}

document.getElementById('root') && ReactDOM.render(<HackathonKanban />, document.getElementById('root'));

export default HackathonKanban;