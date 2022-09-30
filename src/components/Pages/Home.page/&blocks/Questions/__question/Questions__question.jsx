import React from 'react';

import {useToggler} from "components/Utils.Components/CustomHooks/useToggler";

const QuestionsQuestion = ({qTitle, qAnswer}) => {

    const [is, toggler] = useToggler(false);

    const clickHandle = () => {
        if (is) {
            toggler.off();
            return;
        }

        toggler.on();
    }

    return (
        <div className={'questions__question'}>
            <div className={'questions__qTitle'} onClick={clickHandle}>
                <div className={'questions__q'}>
                    <p>{qTitle}</p>
                </div>
                <div className={`questions__q-btn 
                ${is ? 'questions__question_btn_close' : 'questions__question_btn_open'}`}>
                </div>
            </div>
            <div className={`questions__qAnswer 
            ${is ? 'questions__question_open' : 'questions__question_close'}`}>
                <p> {qAnswer} </p>
            </div>
        </div>
    );
};

export default QuestionsQuestion;