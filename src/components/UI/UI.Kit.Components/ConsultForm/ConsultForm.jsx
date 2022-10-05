import React, {useState} from 'react';

import Input, {INPUT_UI_TEXT_POS_CENTER, INPUT_UI_TEXT_POS_LEFT} from "ui/UI.Kit.Components/Input/Input";
import Button from "ui/UI.Kit.Components/Button/Button";

import ConsultFormController from "ui/UI.Kit.Components/ConsultForm/controller/ConsultForm.controller";

import './style.common/ConsultForm.scss'
import './style.common/_els_align/ConsultsForm_els_align_center.scss'

export const CONSULT_FORM_ELS_ALIGN_CENTER = 'consult-form_els_align_center';
export const CONSULT_FORM_ELS_ALIGN_LEFT = 'form_els_align_left';

const ConsultForm = ({elsAlign = CONSULT_FORM_ELS_ALIGN_LEFT, onSubmit}) => {

    const [nameData, setNameData] = useState({data: '', isError: false});
    const [emailData, setEmailData] = useState({data: '', isError: false});
    const [dealData, setDealData] = useState({data: '', isError: false});

    const [consultFormController] = useState(new ConsultFormController(
        setNameData,
        setEmailData,
        setDealData,
        onSubmit
    ))

    const onSubmitButtonHandler = (e) => {
        consultFormController.onSubmitButtonHandler(
            e,
            nameData.data,
            emailData.data,
            dealData.data
        )
    }


    return (
        <form className={[
            'consult-form',
            elsAlign
        ].join(' ')}>
            <Input
                value={nameData.data}
                isError={nameData.isError}
                setValue={consultFormController.onSetNameHandler}
                placeholder={'Ваше имя'}
                type={'text'}
                position={
                    elsAlign === CONSULT_FORM_ELS_ALIGN_LEFT
                        ? INPUT_UI_TEXT_POS_LEFT
                        : INPUT_UI_TEXT_POS_CENTER
                }
                errorText={'Неверно введено имя'}
            />
            <Input
                value={emailData.data}
                isError={emailData.isError}
                setValue={consultFormController.onSetEmailHandler}
                placeholder={'E-mail'}
                type={'text'}
                position={
                    elsAlign === CONSULT_FORM_ELS_ALIGN_LEFT
                        ? INPUT_UI_TEXT_POS_LEFT
                        : INPUT_UI_TEXT_POS_CENTER
                }
                errorText={'Неверно введен e-mail'}
            />
            <Input
                value={dealData.data}
                isError={dealData.isError}
                setValue={consultFormController.onSetDealHandler}
                placeholder={'Опишите дело'}
                type={'text'}
                position={
                    elsAlign === CONSULT_FORM_ELS_ALIGN_LEFT
                        ? INPUT_UI_TEXT_POS_LEFT
                        : INPUT_UI_TEXT_POS_CENTER
                }
                errorText={'Неверно введено дело'}
            />
            <Button
                classNames={['el_width_150']}
                text={'Отправить'}
                onClickHandler={onSubmitButtonHandler}/>
        </form>
    );
};

export default ConsultForm;