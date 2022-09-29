import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import AppRouter from "components/AppRouter/AppRouter";

import './styles.common/App.scss'

const App = () => {

    return (
        <div content={'app'}>
            <AppRouter/>
        </div>
    );
};

export default App;