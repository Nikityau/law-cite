import React, {useState} from 'react';

import Input, {INPUT_UI_TEXT_POS_LEFT} from "ui/UI.Kit.Components/Input/Input";
import Button from "ui/UI.Kit.Components/Button/Button";

import './style.common/ConsultForm.scss'

export const CONSULT_FORM_ELS_ALIGN_CENTER = ''
export const CONSULT_FORM_ELS_ALIGN_LEFT = ''

const ConsultForm = ({ elsAlign }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [deal, setDeal] = useState('')

    const onSetNameHandler = (e) => {
        setName(e.target.value)
    }

    const onSetEmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const onSetDealHandler = (e) => {
        setDeal(e.target.value)
    }

    const onClickBtnHandler = (e) => {
        e.preventDefault()
    }

    return (
        <form className={'consult__form'}>
            <Input
                value={name}
                setValue={onSetNameHandler}
                placeholder={'Ваше имя'}
                type={'text'}
                position={INPUT_UI_TEXT_POS_LEFT}/>
            <Input
                value={email}
                setValue={onSetEmailHandler}
                placeholder={'E-mail'}
                type={'text'}
                position={INPUT_UI_TEXT_POS_LEFT}/>
            <Input
                value={deal}
                setValue={onSetDealHandler}
                placeholder={'Опишите дело'}
                type={'text'}
                position={INPUT_UI_TEXT_POS_LEFT}/>
            <Button
                classNames={['el_width_150']}
                text={'Отправить'}
                onClickHandler={onClickBtnHandler}/>
        </form>
    );
};

export default ConsultForm;