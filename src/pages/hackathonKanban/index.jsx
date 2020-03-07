import React from 'react';
import ReactDOM from 'react-dom';
import BadgeCardList from './badgeCardList';
import KanbanTimer from './kanbanTimer';
import Language from "../../components/language";

import './index.scss';

class HackathonKanban extends Language {

    render() {
        const language = ['zh-cn'];
        const dataSource = this.getLanguageDict(language, 'hackathonKanban');
        const { kanbanTimer, contentTitle, badgeCards } = dataSource;
        const firstItemList = ['country', 'participant', 'team', 'star'].map( item => badgeCards[item] );
        
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
                        <section className="badge-card-list-first">
                            <BadgeCardList itemList={firstItemList} /> 
                        </section>
                    </article>
                </main>
            </div>
        );
    }

}

document.getElementById('root') && ReactDOM.render(<HackathonKanban />, document.getElementById('root'));

export default HackathonKanban;