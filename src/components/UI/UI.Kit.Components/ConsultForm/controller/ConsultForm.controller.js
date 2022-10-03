class ConsultFormController {

    _validNameRegExp = /^[а-я]+\s[а-я]+$/i;
    _validEmailRegExp = /^[a-z]+@mail\.(ru|com)$/;
    _validDealRegExp = /\w/i;

    constructor(setNameData, setEmailData, setDealData, onSubmitCb) {
        this.setNameData = setNameData;
        this.setEmailData = setEmailData;
        this.setDealData = setDealData;

        this.onSubmitCb = onSubmitCb;

        this.onSetDealHandler = this.onSetDealHandler.bind(this);
        this.onSetNameHandler = this.onSetNameHandler.bind(this);
        this.onSetEmailHandler = this.onSetEmailHandler.bind(this);
        this.onSubmitButtonHandler = this.onSubmitButtonHandler.bind(this);
    }


    _validateData(value, regExp) {
        return regExp.test(value);
    }

    _setData(setF, props, value) {
        setF(prev => ({
            ...prev,
            [props]: value
        }));
    }

    onSetNameHandler(e) {
        this._setData(this.setNameData, 'data', e.target.value);
    }

    onSetEmailHandler(e) {
        this._setData(this.setEmailData, 'data', e.target.value);
    }

    onSetDealHandler(e) {
        this._setData(this.setDealData, 'data', e.target.value);
    }


    onSubmitButtonHandler(e, nameData, emailData, dealData) {
        e.preventDefault();

        let isAllValid = true;


        const invalid = (setter, props, value) => {
            this._setData(setter, props, value)

            isAllValid = false
        }

        this._validateData(nameData, this._validNameRegExp)
            ? this._setData(this.setNameData, 'isError', false)
            : invalid(this.setNameData, 'isError', true)

        this._validateData(emailData, this._validEmailRegExp)
            ? this._setData(this.setEmailData, 'isError', false)
            : invalid(this.setEmailData, 'isError', true)

        dealData.length > 0
            ? this._setData(this.setDealData, 'isError', false)
            : invalid(this.setDealData, 'isError', true)


        if (!isAllValid) return;

        this.onSubmitCb &&
        this.onSubmitCb({
            name: nameData,
            email: emailData,
            deal: dealData
        });
    }

}

export default ConsultFormController;