import React from 'react';

import Questions__question from "components/Pages/Home.page/&blocks/Questions/__question/Questions__question";

import './style.common/Questions.scss'
import './style.common/__question/Questions__question.scss'
import './style.common/__question/Questions__question_focus.scss'
import './style.common/__question/_open/Questions__question_open.scss'
import './style.common/__question/_close/Questions__question_close.scss'
import './style.common/__question/_btn/Questions__question_btn_open.scss'
import './style.common/__question/_btn/Questions__question_btn_close.scss'

const Questions = () => {
    return (
        <article className={'questions el_padding_side_100'} id={'answers'}>
            <div className={'questions__title'}>
                <h2>Ответы на вопросы</h2>
            </div>
            <div className={'questions__all'}>
                <Questions__question
                    qTitle={'Какие услуги предоставляет Justice Law?'}
                    qAnswer={'Different kind of services'}
                />
                <Questions__question
                    qTitle={'Какие услуги предоставляет Justice Law?'}
                    qAnswer={'Different kind of services'}
                />
                <Questions__question
                    qTitle={'Какие услуги предоставляет Justice Law?'}
                    qAnswer={'Different kind of services'}
                />
            </div>
        </article>
    );
};

export default Questions;